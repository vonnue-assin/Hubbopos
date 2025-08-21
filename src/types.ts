import InfiniteScroll from './components/InfiniteScroll';

export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type AccordionProps = {
  data: AccordtionItem[];
};

export type commentsItem = {
  id: number;
  content: string;
  image?: string;
  quoteSvg?: string;
  subheading: subheading;
};

type subheading = {
  name: string;
  owner: string;
  logo?: string;
};

export interface InfiniteScrollProps {
  data: commentsItem[];
}
