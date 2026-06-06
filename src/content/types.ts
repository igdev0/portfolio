export interface Section<T> {
  comment: string
  title: string;
  statement: string;
  data: T;
}