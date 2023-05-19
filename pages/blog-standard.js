import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const BlogStandard = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blogs"} />
      <section className="blog-standard-section pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard-wrapper">
                <div className="blog-post-item-three mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/download.jpeg"
                      alt="Post Image"
                      width="1000"
                      height="500"
                    />
                  </div>
                  <div className="entry-content white-bg">
                    <a href="#" className="cat-btn">
                      Website Launch
                    </a>
                    <h3 className="title">
                      <Link href="/blog-details">
                        <a>
                          We are excited to launch our website to showcase our
                          projects
                        </a>
                      </Link>
                    </h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            <a href="#">21 November 2022</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comments" />
                            <a href="#">Comment (0)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cart-button">
                  <Link href="/blog-form">
                    <a className="main-btn btn-yellow">Add Blog</a>
                  </Link>
                </div>
                </div>
                </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogStandard;
