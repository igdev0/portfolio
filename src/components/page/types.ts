
export interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export interface PageProps {
  children: JSX.Element[] | JSX.Element;
  meta: MetaProps;
}
