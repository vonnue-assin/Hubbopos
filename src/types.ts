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
  image2:string;
  content: {
    heading: string;
    paragraph: string;
    Option1: string;
    Option2: string;
    Option3: string;
    Option4?: string;
    Option5?: string;
    Option6?: string;
    link: string;
    [key: string]: string | undefined;
  };
};
