export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type LeadingSystemsDetails = {
  id: number;
  imageUrl?: string;
  Heading: string;
  description: string;
};

export type NewRawJsonItem = {
  id: number;
  Heading: string;
  features: string[];
};

export type NewRawJsonData = NewRawJsonItem[];

export type AccordionProps = {
  data: AccordionItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
};

export type AccordionContent = {
  heading: string;
  paragraph?: string;
  features?: string[];
  link?: string;
};

// Type for a single accordion item
export type AccordionItem = {
  id: number;
  image1?: string;
  content: AccordionContent;
};
