import { AccordionItem, NewRawJsonData } from '../../types/footer';

export const FooterList = (data: NewRawJsonData): AccordionItem[] => {
  return data.map(item => ({
    id: Number(item.id),
    content: {
      heading: item.Heading,
      features: item.features,
    },
  }));
};
