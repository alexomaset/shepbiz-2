import { createClient } from "contentful";
import BlogStandard from "./blog-standard";
import { projectsSliderThree } from "src/sliderProps";
import BlogCard from "components/BlogCard";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "posts" });
  const posts = res.items;

  return {
    props: {
      posts,
    },
    revalidate: 1
  };
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <PageBanner pageName={"Blogs"} />
      <section className="blog-standard-section pt-170 pb-80">
        <div>
          {posts.map((post) => (
            <BlogCard key={post.sys.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
