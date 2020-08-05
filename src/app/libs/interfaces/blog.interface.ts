import { Categories } from '@libs/modals';

export interface IBlog {
  date: string;
  topic: string;
  title: string;
  content: string;
  coverImage: string;
  category: Categories;
  vote: number;
}
