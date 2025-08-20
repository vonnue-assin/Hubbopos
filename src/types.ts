export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type AccordionProps = {
  data: AccordtionItem[];
};
