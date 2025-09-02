export type AccordionContent = {
  heading: string;
  paragraph: string;
  Option1?: string;
  Option2?: string;
  Option3?: string;
  Option4?: string;
  Option5?: string;
  Option6?: string;
  link: string;
};

export type AccordionDataItem = {
  buttonLabel: string;
  id: string;
  image?: string;
  content: AccordionContent;
};

export type AccordionProps = {
  data: AccordionDataItem[];
};

export type TabData = {
  id: string;
  buttonLabel: string;
  image: string;
  content: {
    heading: string;
    paragraph: string;
    [key: string]: string;
    link: string;
  };
};

export type LeadingSystemsDetails = {
  id: number;
  imageUrl?: string;
  Heading: string;
  description: string;
};
