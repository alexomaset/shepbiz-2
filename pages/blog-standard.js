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
        <div className="col-xl-4 col-lg-5">
          <div className="sidebar-widget-area">
            <div className="widget search-widget mb-40 wow fadeInUp">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                  <input
                    type="email"
                    className="form_control"
                    placeholder="Search here"
                    name="email"
                    required=""
                  />
                  <button className="search-btn">
                    <i className="far fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="widget tag-cloud-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Popular Tags</h4>
              <a href="#">Avocado</a>
              <a href="#">Groundnuts</a>
              <a href="#">Cashew Nuts</a>
              <a href="#">Macadamia</a>
              <a href="#">Milled Rice</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
