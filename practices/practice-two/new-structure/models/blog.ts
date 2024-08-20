export interface BlogBodyType {
  id: string;
  subtitle: string;
  content: string;
}

export interface BlogType {
  id: string;
  author: string;
  title: string;
  imageURL: string;
  topicId: string;
  externalLink?: string;
  body: BlogBodyType[];
  createdAt: number;
  updatedAt: number;
}

export type BlogsType = BlogType[];
