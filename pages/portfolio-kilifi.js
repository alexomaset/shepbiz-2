import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
import { serviceSliderOne } from "../src/sliderProps";
const PortfolioKilifi = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Cashew Nuts"} pageName={"Value Chain"} />
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder wow fadeInUp">
                  <img src="assets/images/service/cashew.jpg" alt="" />
                </div>
                <div className="content text-center wow fadeInDown">
                  <h3 className="title">Cashew Nuts Value Chain</h3>
                </div>
                <div className="service-content wow fadeInUp">
                  <p>
                    According to AFA-Nuts and Oil statistical Report (2021),
                    Nationally the total hectarage under cashew nut production
                    is 23,158 with a production of 9121metric tonnes of cashew
                    nut produced annually. The area under cashew nut has
                    increased by 2% from the year 2020 which was 22690 hectarage
                    however there is a reduction in quantities produced which
                    were 12668. Kilifi is the leading cashew nut producing
                    county among the coastal counties with a total hectarage of
                    9595 as at 2021. Although there is an increase in hectarage
                    from 9445 in 2020, the quantities produced annually have
                    reduced from 4704 metric tonnes to 3387 metric tonnes. The
                    decline in production was attributed to; rampant tree
                    felling for supply of firewood for domestic and industrial
                    use is a major threat to the existing tree population
                    overshadowing the ongoing replanting initiatives, high
                    incidences of pest and diseases, inadequate water for
                    production(drought) as well as high labour cost for
                    management of orchards. The increased acreage was as result
                    of new planting in Kilifi as part of a tree revamping
                    project. Most of the harvested produce was consumed
                    domestically after cottage level processing while less than
                    20% of the processed kernel was exported (Nuts and Oil
                    statistical Report (2021). SHEPBIZ project is being
                    implemented in 5 sub counties i.e., Kilifi North, Kaloleni,
                    Ganze, Malindi and Magarini with a key focus on intervention
                    along the Input, Production and processing nodes. The
                    project aims at promoting access to quality and improved
                    planting materials, trainings of value chain actors and
                    facilitators and linkage to financial institutions, promote
                    water harvesting structures, promote mechanized production
                    and processing. The key focus in the project is promotion of
                    cottage industries where majority of the nuts are processed
                    for better market entry. A value Chain platform was
                    established through the program to coordinate value actors
                    and their activities to promote the cashew nut value chain.
                    It consists of value chain actors across all value chain
                    nodes who elected interim committee members i.e.,
                    Chairperson, Vice chairperson, Treasurer, Secretary, Vice
                    secretary, Organizing Secretary and 3 ex officio members.
                  </p>
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
                <div className="widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Sub-counties</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Kilifi North
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kaloleni
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Ganze
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Malindi
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Magarini
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget contact-info-widget bg_cover mb-40 wow fadeInUp"
                  style={{
                    backgroundImage: "url(assets/images/widget/payphone.jpg)",
                  }}
                >
                  <div className="contact-info-box text-center">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="info">
                      <h5>
                        <a href="mailto:cdagriculturekilifi@gmail.com">
                          cdagriculturekilifi@gmail.com
                        </a>
                      </h5>
                      <a
                        href="#"
                        className="main-btn bordered-btn bordered-black"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="widget download-widget mb-40 wow fadeInUp">
                  <a href="#">
                    <i className="far fa-file-pdf" />
                    Upload doc
                  </a>
                  <a href="#">
                    <i className="far fa-file-word" />
                    Download doc.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=16WckAUQ-0Y_KBmwbEKDhRvQ3vZpIWE8T"
          width="500"
          height="650"
        ></iframe>
      </div>
      {/*====== End service-details-section Section ======*/}
      <section className="blog-section pt-90 pb-130 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Latest News Blog</span>
                <h2>Read Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-4.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Smashin Podcast Episode Ferdinande Web Dead</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-5.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Powerful Termimand Linec Tools Modern Web</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-6.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Smashin Podcast Episode Ferdinande Web Dead</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-box text-center wow fadeInUp">
                <Link href="/blog-standard">
                  <a className="main-btn bordered-btn bordered-yellow">
                    View More News
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PortfolioKilifi;
