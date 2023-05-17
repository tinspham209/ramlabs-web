const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

const config = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-05-17',
};

export default config;
