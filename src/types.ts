export interface PostType {
  draft: boolean;
  id: string;
  title: string;
  publishDate: string;
  tag: string;
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
  comment: string;
}

interface Mockup {
  pc: string;
  mobile: string;
}
