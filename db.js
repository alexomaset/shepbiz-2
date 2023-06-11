import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

async function fetchTags() {
  try {
    const response = await client.getEntries({'metadata.tags.sys.id[in]': 'riceVc,cashewVc,groudnutsVc,macadamiaVc,avocado_vc'});
    return response.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchTags;
