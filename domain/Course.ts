interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  years?: number[];
  colors: string[];
}

export type { Course };
