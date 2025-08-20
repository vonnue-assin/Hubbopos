export type AccordionContent = {
  heading: string;
  paragraph: string;
  Option1?: string;
  Option2?: string;
  Option3?: string;
  Option4?: string; 
  Option5?: string;
  Option6?: string; 
};

export type AccordionDataItem = {
  id: string; 
  image?: string; 
  content: AccordionContent; 
};

export type AccordionProps = {
  data: AccordionDataItem[];
};