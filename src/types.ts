export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type AccordionProps = {
  data: AccordtionItem[];
};

export type AnimationProps = {
  id: number;
  imageUrl?: string;
};
