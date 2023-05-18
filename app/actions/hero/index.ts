import { SCHEMA_KEY } from '@sanity-key';
import { groq } from 'next-sanity';
import getClient from '../client-config';

export interface Hero {
  id: string;
  createdAt: string;
  title: string;
  slug: string;
  url: string;
  image: string;
}

export async function getAllHeros() {
  return await getClient.fetch(
    groq`*[_type == "${SCHEMA_KEY.HERO_BANNER}"]{
      "id": _id,
      "createdAt":_createdAt,
      title,
      "slug": slug.current,
      url,
      "image": image.asset._ref
    }`
  );
}

export async function getHero(slug: string) {
  return await getClient.fetch(
    groq`*[_type == "${SCHEMA_KEY.HERO_BANNER}" && slug.current == $slug][0]{
        "id": _id,
        "createdAt":_createdAt,
      title,
      "slug": slug.current,
      url,
      "image": image.asset._ref
    }`,
    {
      slug,
    }
  );
}
