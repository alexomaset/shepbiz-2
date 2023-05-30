import { createClient } from "contentful";
import Link from "next/link";
import Layout from "../../src/layouts/Layout";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "posts" });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "posts",
    "fields.slug": params.slug,
  });

  return {
    props: { posts: items[0] },
  };
}

export default function PostDetails({ posts }) {
  const { title, content, image, date } = posts.fields;

  console.log(posts);
  return (
      <section className="blog-details-page pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-wrapper mb-40 wow fadeInUp">
                <div className="blog-post-item">
                  {/* <div className="post-thumbnail">
                    <Image
                      src={'https:' + image.fields.file.url}
                      alt="Blog Image"
                      width={image.fields.file.details.image.width}
                      height={image.fields.file.details.image.height}
                    />
                  </div> */}
                  <div className="post-content">
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        {title}
                      </a>
                      <h3 className="title">{title}</h3>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="far fa-calendar-alt" />
                              <a href="#">{date}</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>{documentToReactComponents(content)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                <div className="widget tag-cloud-widget wow fadeInUp mb-40">
                  <h4 className="widget-title">Popular Tags</h4>
                  <a href="#">Macadamia</a>
                  <a href="#">Cashew</a>
                  <a href="#">Avocado</a>
                  <a href="#">Milled Rice</a>
                  <a href="#">Groundnuts</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
