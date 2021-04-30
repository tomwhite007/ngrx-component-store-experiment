import { BooksEntity } from './books.models';

export const createBooksEntity = (id: string, name = '') =>
  ({
    id,
    title: name || `title-${id}`,
  } as BooksEntity);
