import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

const config = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-05-17',
  useCdn: true,
};

const getClient = createClient(config);

const imgBuilder = imageUrlBuilder(config);

export const urlToImage = (source: any) => {
  return imgBuilder.image(source);
};

export default getClient;
