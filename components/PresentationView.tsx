import React, { useState, useEffect, useMemo } from 'react';
import type { Lesson, ContentBlock } from '../types';
import { renderBlock } from './Content';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from './Icons';

interface PresentationViewProps {
  lesson: Lesson;
  onExit: () => void;
}

type Slide = ContentBlock[];

export const PresentationView: React.FC<PresentationViewProps> = ({ lesson, onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides: Slide[] = useMemo(() => {
    const generatedSlides: Slide[] = [];
    
    // Slide de Título
    generatedSlides.push([{ type: 'subtitle', content: lesson.title }]);
    
    let currentSlide: Slide = [];
    
    lesson.content.forEach(block => {
      if (block.type === 'subtitle') {
        if (currentSlide.length > 0) {
          generatedSlides.push(currentSlide);
        }
        currentSlide = [block];
      } else {
        currentSlide.push(block);
      }
    });
    
    if (currentSlide.length > 0) {
      generatedSlides.push(currentSlide);
    }
    
    return generatedSlides;
  }, [lesson]);

  const handleNext = () => {
    setCurrentSlideIndex(prev => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onExit();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides.length]);

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 z-50 flex flex-col font-sans">
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h1 className="text-lg font-semibold text-blue-600 dark:text-blue-400 truncate" title={lesson.title}>{lesson.title}</h1>
        <button onClick={onExit} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" title="Sair da Apresentação (Esc)">
          <XIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl w-full">
            {slides[currentSlideIndex].map((block, index) => {
                // Personalização para o modo apresentação
                if(block.type === 'subtitle' && index === 0) {
                    return <h1 key={index} className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">{block.content as string}</h1>
                }
                return renderBlock(block, index);
            })}
        </div>
      </main>

      <footer className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handlePrev}
          disabled={isFirstSlide}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Slide Anterior"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentSlideIndex + 1} / {slides.length}
        </span>
        <button
          onClick={handleNext}
          disabled={isLastSlide}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Próximo Slide"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
      </footer>
    </div>
  );
};
