import { NewRawJsonData, AccordionItem } from '../../types/types';

export const FooterList = (rawData: NewRawJsonData): AccordionItem[] => {
  return rawData.map(item => {
    return {
      id: item.id,
      content: {
        heading: item.Heading,
        features: item.features,
      },
    };
  });
};
