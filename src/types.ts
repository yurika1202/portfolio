export type SiteMeta = {
  author?: string;
  title?: string;
  description?: string;
  ogImg?: string;
};

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
  subSkills: object;
  period: string;
  feature: string[];
  screenShot: {
    pc: string;
    mobile: string;
  };
  comment: string;
}
