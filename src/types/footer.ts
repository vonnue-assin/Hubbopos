export type AccordionContent = {
  heading: string;
  paragraph?: string;
  features?: string[];
  link?: string;
};

export type AccordionItem = {
  id: number;
  image1?: string;
  content: AccordionContent;
};

export type NewRawJsonItem = {
  id: number | string;
  Heading: string;
  features: string[];
};

export type NewRawJsonData = NewRawJsonItem[];

export type AccordionProps = {
  data: AccordionItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
};
