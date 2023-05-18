import { artists } from './artists';
import blockContent from './block-content';

import { collections } from './collections';
import { heros } from './heros';
import { productCategory, products, productsDiscount } from './products';

const schemas = [
  collections,
  products,
  productCategory,
  productsDiscount,
  artists,
  heros,
  blockContent,
];

export default schemas;
