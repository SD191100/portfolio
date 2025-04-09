export interface Post {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  content: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  tags: string[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}


export type tParams = Promise<{ slug: string }>;
