import { Metadata } from 'next';

export const DOMAIN_PRODUCT = 'https://tinspham.dev';

type SafeMetaData = {
  title?: string;
  description?: string;
  url?: string;
};

export const getMetaData = ({
  title = 'Creative & Culture | Tee & Gift | RAM Labs',
  description = 'RAM Labs',
  url = DOMAIN_PRODUCT,
}: SafeMetaData): Metadata => {
  return {
    title: `${title}`,
    description: description,

    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description: description,
      creator: '@tinspham209',
    },
    metadataBase: new URL(url),
    themeColor: '#FFF',
  };
};
