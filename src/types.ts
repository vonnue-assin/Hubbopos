export type AccordionContent = {
  heading: string;
  paragraph: string;
  features: string[];
  link: string;
};

export type AccordionDataItem = {
  id: string;
  buttonLabel: string;
  image1?: string;
  image2?: string;
  content: AccordionContent;
};

export type AccordionProps = {
  data: AccordionDataItem[];
};

export type TabData = {
  id: string;
  buttonLabel: string;
  image1: string;
  image2: string;
  content: {
    heading: string;
    paragraph: string;
    features: string[];
    link: string;
  };
};

export type LeadingSystemsDetails = {
  id: number;
  imageUrl?: string;
  Heading: string;
  description: string;
};

type Subheading = {
  name: string;
  owner: string;
  logo: string;
};

export type ItemData = {
  id: number;
  image: string;
  quoteSvg: string;
  content: string;
  subheading: Subheading;
};

export type InfiniteScrolProps = {
  data: ItemData[];
};