import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
// import { Page } from './types/schemaTypes';

// export async function getPages(): Promise<Page[]> {
export async function getPages(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

// export async function getPage(slug: string): Promise<Page> {
export async function getPage(slug: string): Promise<any> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
