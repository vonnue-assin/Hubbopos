// export type AccordionDataItem = {
//   id: string;
//   buttonLabel: string;
//   image1?: string;
//   image2?: string;
//   content: AccordionContent;
// };

export type AccordionPropss = {
  data: AccordionDataItem[];
};

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
export type AnimationProps = {
  id: number;
  imageUrl?: string;
};
export type NewRawJsonItem = {
  id: number;
  Heading: string;
  features: string[];
};

export type NewRawJsonData = NewRawJsonItem[];

// export type AccordionProps = {
//   data: AccordionItem[];
//   openIndex: number | null;
//   onToggle: (index: number) => void;
// };

// export type AccordionContent = {
//   heading: string;
//   paragraph?: string;
//   features?: string[];
//   link?: string;
// };

export type ContentData = {
  heading: string;
  paragraph?: string;
  features: string[];
  link?: string;
};

export interface AccordionItem {
  id: string | number;
  buttonLabel?: string;
  Heading?: string;
  image1?: string;
  image2?: string;
  content?: ContentData;
  features?: string[];
}

export interface AccordionItem {
  id: string | number;
  buttonLabel?: string;
  Heading?: string;
  image1?: string;
  image2?: string;
  content?: {
    heading: string;
    paragraph?: string;
    features: string[];
    link?: string;
  };
  features?: string[];
}

// export interface AccordionProps {
//   data: AccordionItem[];
//   onToggle: (index: number) => void;
//   openIndex: number | null;
//   tabsData: TabData[];
//   isFooter: boolean;
// }

export interface SimpleAccordionItem {
  id: number;
  Heading: string;
  features: string[];
}

export interface RichAccordionItem {
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
}

export type AccordionData = SimpleAccordionItem[] | RichAccordionItem[];

export interface CommonAccordionProps {
  data: AccordionData;
  openIndex: number | null;
  onToggle: (index: number) => void;
  type: 'simple' | 'rich';
}

export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
};

export type AccordionProp = {
  data: AccordionItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
};

// export type AccordionContent = {
//   heading: string;
//   paragraph?: string;
//   features?: string[];
//   link?: string;
// };

// Type for a single accordion item
// export type AccordionItem = {
//   id: number;
//   image1?: string;
//   content: AccordionContent;
// };
