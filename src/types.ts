export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type AccordionProps = {
  data: AccordtionItem[];
};

export type LeadingSystemsDetails = {
  id: number;
  imageUrl?: string;
  Heading: string;
  description: string;
};
