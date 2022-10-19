export interface PostType {
  title: string;
  publishDate: string;
  thumbnail: string;
  thumbnailType: string;
  link: string;
  github: string;
  role: string[];
  skill: string[];
  subSkills: {};
  period: string;
  feature: string[];
  mockup: Mockup;
}

interface Mockup {
  pc: string;
  mobile: string;
}
