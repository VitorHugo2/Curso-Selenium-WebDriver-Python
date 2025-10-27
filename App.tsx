import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { courses } from './data/courseData';
import type { Lesson } from './types';
import { MenuIcon, PresentationIcon } from './components/Icons';
import { PresentationView } from './components/PresentationView';

const App: React.FC = () => {
  const [selectedCourseKey, setSelectedCourseKey] = useState(Object.keys(courses)[0]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPresentationMode, setPresentationMode] = useState(false);

  const currentCourseData = useMemo(() => {
    return courses[selectedCourseKey]?.modules ?? [];
  }, [selectedCourseKey]);

  const currentLesson = useMemo<Lesson | null>(() => {
    const course = courses[selectedCourseKey];
    if (!course || !course.modules) return null;

    const module = course.modules[currentModuleIndex];
    if (!module || !module.lessons) return null;

    return module.lessons[currentLessonIndex] ?? null;
  }, [selectedCourseKey, currentModuleIndex, currentLessonIndex]);


  const handleSelectCourse = (courseKey: string) => {
    setSelectedCourseKey(courseKey);
    setCurrentModuleIndex(0);
    setCurrentLessonIndex(0);
  };

  const handleSelectLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleNext = () => {
    const currentModule = currentCourseData[currentModuleIndex];
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < currentCourseData.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      const prevModuleIndex = currentModuleIndex - 1;
      const prevModule = currentCourseData[prevModuleIndex];
      setCurrentModuleIndex(prevModuleIndex);
      setCurrentLessonIndex(prevModule.lessons.length - 1);
    }
  };
  
  const isFirstLesson = currentModuleIndex === 0 && currentLessonIndex === 0;
  const isLastLesson = currentModuleIndex === currentCourseData.length - 1 && currentLessonIndex === currentCourseData[currentCourseData.length - 1]?.lessons.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCourseKey, currentModuleIndex, currentLessonIndex]);
  
  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p>Carregando lição ou erro nos dados do curso...</p>
      </div>
    );
  }

  if (isPresentationMode) {
    return <PresentationView lesson={currentLesson} onExit={() => setPresentationMode(false)} />;
  }

  return (
    <div className="flex h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div 
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <Sidebar
        courses={courses}
        selectedCourseKey={selectedCourseKey}
        onSelectCourse={handleSelectCourse}
        currentCourseData={currentCourseData}
        currentModuleIndex={currentModuleIndex}
        currentLessonIndex={currentLessonIndex}
        onSelectLesson={handleSelectLesson}
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <main className="flex-1 flex flex-col transition-all duration-300 md:ml-64">
        <header className="md:hidden sticky top-0 flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-20">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <MenuIcon className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{courses[selectedCourseKey].title}</h1>
           <button onClick={() => setPresentationMode(true)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" title="Modo Apresentação">
            <PresentationIcon className="h-6 w-6" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{currentLesson.title}</h1>
                <button onClick={() => setPresentationMode(true)} className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" title="Modo Apresentação">
                  <PresentationIcon className="h-5 w-5" />
                  <span>Apresentar</span>
                </button>
            </div>
            <Content lesson={currentLesson} />
          </div>
          <div className="max-w-4xl mx-auto mt-12 flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
            <button
              onClick={handlePrev}
              disabled={isFirstLesson}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={isLastLesson}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors"
            >
              Próximo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;