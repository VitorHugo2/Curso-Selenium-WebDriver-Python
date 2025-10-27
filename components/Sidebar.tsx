
import React from 'react';
import type { Module, Courses } from '../types';
import { XIcon } from './Icons';

interface SidebarProps {
  courses: Courses;
  selectedCourseKey: string;
  onSelectCourse: (courseKey: string) => void;
  currentCourseData: Module[];
  currentModuleIndex: number;
  currentLessonIndex: number;
  onSelectLesson: (moduleIndex: number, lessonIndex: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  courses,
  selectedCourseKey,
  onSelectCourse,
  currentCourseData,
  currentModuleIndex,
  currentLessonIndex,
  onSelectLesson,
  isOpen,
  setIsOpen
}) => {
  return (
    <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Cursos</h1>
        <button onClick={() => setIsOpen(false)} className="p-2 md:hidden">
          <XIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4 border-b border-gray-700">
        <label htmlFor="course-select" className="block text-sm font-medium text-gray-400 mb-1">Selecione o Curso:</label>
        <select
          id="course-select"
          value={selectedCourseKey}
          onChange={(e) => onSelectCourse(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          {Object.entries(courses).map(([key, course]) => (
            <option key={key} value={key}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <nav className="overflow-y-auto flex-1 p-4">
        <ul>
          {currentCourseData.map((module, moduleIndex) => (
            <li key={moduleIndex} className="mb-4">
              <h2 className="text-sm font-semibold uppercase text-gray-400 mb-2 px-2">{module.title}</h2>
              <ul>
                {module.lessons.map((lesson, lessonIndex) => {
                  const isActive = moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex;
                  return (
                    <li key={lessonIndex}>
                      <button
                        onClick={() => onSelectLesson(moduleIndex, lessonIndex)}
                        className={`w-full text-left px-2 py-1.5 rounded-md transition-colors text-sm ${
                          isActive
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'hover:bg-gray-700 text-gray-300'
                        }`}
                      >
                        {lesson.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
