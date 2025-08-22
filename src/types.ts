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

export type TabData = {
  id: string;
  buttonLabel: string;
  image1: string;
  image2: string;
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

export type AccordtionItem = {
  id: number;
  content: string;
  image?: string;
  header: string;
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
