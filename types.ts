
export interface ImageContent {
  src: string;
  caption: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'code' | 'list' | 'subtitle' | 'tip' | 'warning' | 'image';
  content: string | string[] | ImageContent;
  language?: 'python' | 'bash' | 'javascript' | 'html';
}

export interface Lesson {
  title: string;
  content: ContentBlock[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  modules: Module[];
}

export interface Courses {
  [key: string]: Course;
}
