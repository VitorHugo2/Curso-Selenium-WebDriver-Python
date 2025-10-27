import React from 'react';
import type { Lesson, ContentBlock, ImageContent } from '../types';
import { CodeBlock } from './CodeBlock';
import { LightBulbIcon, ExclamationIcon } from './Icons';

interface ContentProps {
  lesson: Lesson;
}

export const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: block.content as string }}></p>
      );
    case 'subtitle':
      return (
        // FIX: Cast block.content to a string. The type was too broad and caused a type error because React cannot render an object or array directly.
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-800 dark:text-gray-100">{block.content as string}</h2>
      );
    case 'code':
      return <CodeBlock key={index} code={block.content as string} language={block.language || 'python'} />;
    case 'list':
      return (
        <ul key={index} className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
          {(block.content as string[]).map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      );
    case 'tip':
      return (
        <div key={index} className="my-6 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-800 dark:text-blue-300">Dica Profissional</h4>
              <p className="text-blue-700 dark:text-blue-400 mt-1" dangerouslySetInnerHTML={{ __html: block.content as string }}></p>
            </div>
          </div>
        </div>
      );
    case 'warning':
      return (
        <div key={index} className="my-6 p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 rounded-r-lg">
          <div className="flex items-start">
            <ExclamationIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
               <h4 className="font-bold text-yellow-800 dark:text-yellow-300">Atenção</h4>
              <p className="text-yellow-700 dark:text-yellow-400 mt-1" dangerouslySetInnerHTML={{ __html: block.content as string }}></p>
            </div>
          </div>
        </div>
      );
    case 'image':
      const imageData = block.content as ImageContent;
      return (
        <figure key={index} className="my-8">
          <img src={imageData.src} alt={imageData.caption} className="w-full h-auto rounded-lg shadow-md border dark:border-gray-700" />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{imageData.caption}</figcaption>
        </figure>
      );
    default:
      return null;
  }
};

export const Content: React.FC<ContentProps> = ({ lesson }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {lesson.content.map(renderBlock)}
    </div>
  );
};