/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";


const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details-page pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-wrapper mb-40 wow fadeInUp">
                <div className="blog-post-item">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/single-blog-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="post-content">
                    <div className="entry-content">
                      <a href="#" className="cat-btn">
                        Check
                      </a>
                      <h3 className="title">
                      </h3>
                      <div className="post-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="far fa-comments" />
                              <a href="#">Comment (0)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                    check222
                    </p>
                    {/* <blockquote>
                      <h4>
                        Smashing Podcast Episode Pauloag Conve Seen Optimization
                        Inspired Decisions
                      </h4>
                      <h5>Rasalina Willamson</h5>
                    </blockquote> */}
                    {/* <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit labrio sam, nisi ut aliquid ex ea
                      commodi consequatur Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                    </p> */}
                    {/* <div className="post-share-tag mb-40">
                      <div className="row">
                        <div className="col-12">
                          <div className="post-tag-cloud">
                            <ul>
                              <li className="item-heading">Tags :</li>
                              <li>
                                <a href="#">Agency</a>
                              </li>
                              <li>
                                <a href="#">Cosmetics</a>
                              </li>
                              <li>
                                <a href="#">Beauty</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="social-share">
                            <ul className="social-link">
                              <li className="item-heading">Share :</li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-author-box d-flex mb-80">
                      <div className="author-thumb">
                        <img
                          src="assets/images/blog/author-1.jpg"
                          alt="post author"
                        />
                      </div>
                      <div className="author-content">
                        <h4>Rasalina Wilimson</h4>
                        <p>
                          Sed ut perspicia unde omnis iste natus error sit
                          voluptatem accusa doloremque laudantiue totam rem
                          aperiam systems way others
                        </p>
                        <ul className="social-link">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-dribbble" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-navigation pb-30">
                      <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-12 col-md-6">
                          <div className="prev-post post-nav-item d-flex mb-30">
                            <div className="thumb">
                              <img
                                src="assets/images/blog/prev-post.jpg"
                                alt="Post Thumb"
                              />
                            </div>
                            <div className="content">
                              <h6>
                                <Link href="/blog-details">
                                  <a>How Deal With Back During Pregn</a>
                                </Link>
                              </h6>
                              <span className="post-date">
                                <a href="#">
                                  <i className="far fa-calendar-alt" />
                                  25 May 2021
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-6">
                          <div className="next-post post-nav-item d-flex mb-30">
                            <div className="thumb">
                              <img
                                src="assets/images/blog/next-post.jpg"
                                alt="Post Thumb"
                              />
                            </div>
                            <div className="content">
                              <h6>
                                <Link href="/blog-details">
                                  <a>Online Environme Work Older See</a>
                                </Link>
                              </h6>
                              <span className="post-date">
                                <a href="#">
                                  <i className="far fa-calendar-alt" />
                                  25 May 2021
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comments-area mb-50 pt-50 pb-25 wow fadeInUp">
                      <h4 className="comments-title">Popular Comments</h4>
                      <ul className="comments-list">
                        <li className="comment mb-30">
                          <div className="comment-avatar">
                            <img
                              src="assets/images/blog/comment-1.jpg"
                              alt="comment author"
                            />
                          </div>
                          <div className="comment-wrap">
                            <div className="comment-author-content">
                              <span className="author-name">
                                John F. Medina
                                <span className="date">25 Feb 2022</span>
                              </span>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem seen doloremque laudantium totam
                                rem aperiam
                              </p>
                              <a href="#comment-respond" className="reply">
                                Reply
                                <i className="far fa-long-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="comment mb-30">
                          <div className="comment-avatar">
                            <img
                              src="assets/images/blog/comment-2.jpg"
                              alt="comment author"
                            />
                          </div>
                          <div className="comment-wrap">
                            <div className="comment-author-content">
                              <span className="author-name">
                                Jeffrey T. Kelly
                                <span className="date">25 Feb 2022</span>
                              </span>
                              <p>
                                Perspiciatis unde omnis iste natus error sit
                                voluptatem see accusantium doloremque laudantium
                              </p>
                              <a href="#comment-respond" className="reply">
                                Reply
                                <i className="far fa-long-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="comment mb-30">
                          <div className="comment-avatar">
                            <img
                              src="assets/images/blog/comment-3.jpg"
                              alt="comment author"
                            />
                          </div>
                          <div className="comment-wrap">
                            <div className="comment-author-content">
                              <span className="author-name">
                                Richard B. Zellmer
                                <span className="date">25 Feb 2022</span>
                              </span>
                              <p>
                                Unde omnis iste natus error sit voluptate
                                accusantium dolore ways mque laudantium totam
                                rem aperiam
                              </p>
                              <a href="#comment-respond" className="reply">
                                Reply
                                <i className="far fa-long-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                    <div
                      className="comments-respond mb-35"
                      id="comment-respond"
                    >
                      {/* <h4 className="comments-heading">Leave A Message</h4>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="comment-form"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Your Full Name"
                                name="name"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="email"
                                className="form_control"
                                placeholder="Email Address"
                                name="email"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form_group select-100">
                              <select className="wide">
                                <option data-display="Subject :">
                                  Subject :
                                </option>
                                <option value={1}>Customer Support</option>
                                <option value={2}>Server Support</option>
                                <option value={3}>24/7 Support</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Phone Number"
                                name="phone"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <textarea
                                name="message"
                                className="form_control"
                                placeholder="Comments"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <button className="main-btn btn-yellow">
                                Send Us Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
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
                {/* <div className="widget author-widget mb-40 wow fadeInUp">
                  <div className="author-content">
                    <img
                      src="assets/images/widget/uuser-1.jpg"
                      alt="User Image"
                    />
                    <h4>Robert T. Patterson</h4>
                    <p>
                      Sed ut perspiciat unde omnis istenatus error sit
                      voluptatem accusantium emque laudantium totam aperiam
                      eaque ipquae abillo inventore veritatis quase
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Value Chains
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                       Ongoing projects
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Field &amp; Events
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
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
    </Layout>
  );
};
export default BlogDetails;
