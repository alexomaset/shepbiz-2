import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
import { serviceSliderOne } from "../src/sliderProps";
const PortfolioHb = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Groundnuts"} pageName={"Value Chain"} />
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder wow fadeInUp">
                  <img src="assets/images/portfolio/groundnuts-2.jpg" alt="" />
                </div>
                <div className="content text-center wow fadeInDown">
                  <h3 className="title">Groundnuts Value Chain</h3>
                </div>
                <div className="service-content wow fadeInUp">
                  <p>
                    Most farmers in Kenya are now embracing high value crops and
                    groundnuts is not left behind. Nationally, area under
                    production as at 2021 is 13,118Ha and production being
                    13,107MT. Main varieties in Kenya are the runner type and
                    the Red Valencia Groundnuts are mainly grown in Western
                    Kenya by small scale farmers for both food and sale. Homa
                    Bay County Production in 2021 was 7,048 MT from and area of
                    7,529Ha across the county. The current growers yield is 8
                    bags(90kgs) an acre against a potential growers yield of 15
                    bags(90kgs) per acre which can be achieved through
                    improvement of husbandry practices. The county government of
                    Homabay has prioritised groundnut as one of their key value
                    chains promoted in the county. SHEP Biz project is being
                    implemented in Homa Bay Town, Rangwe, Ndhiwa, Rachuonyo
                    North and Rachuonyo South Sub counties. The project aims at
                    promoting ground nut value chain in Homa Bay county due to
                    its potential in upscaling production leading to increased
                    processing and marketing. The key focus is on promoting the
                    processing of groundnut within Homa Bay to address lack of
                    quality peanut butter that is certified by the Kenya Bureau
                    of Statistics (KEBS). SHEP Biz in collaboration with the
                    County Government of Homa Bay and other stakeholders, is in
                    the verge of ensuring that farmers involved in processing of
                    groundnut into butter are able to get the certification to
                    produce quality and certified products to be sold in markets
                    and large store shelves. There is a value chain platform
                    that is responsible to coordinate the platform activities in
                    order to improve the efficiency of the value chain. The
                    platform consists of a Chairman and his Assistant, the
                    Secretary and assistant, treasurer, Organizing Secretary and
                    3 ex-officio members working together to strengthen each
                    node along the groundnut value chain thereby addressing the
                    challenges faced by each node. This is done with the
                    coordination of the County Government at the department of
                    Agriculture through the County Director’s Office.
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
                      <a href="https://www.google.com/maps?q=Rangwe&ftid=0x182b2dc914f45885:0x91ade3b83d2b8396">
                      Rangwe 
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Ndhiwa/@-0.7314721,34.3677234,15z/data=!3m1!4b1!4m6!3m5!1s0x19d4c90d252af9cd:0xe8da2021ba80a744!8m2!3d-0.7298697!4d34.3671172!16s%2Fm%2F0bs6xr0?entry=ttu">
                      Ndhiwa
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps?q=Rachuonyo+North+Headquater&ftid=0x182ad03b6d21dc45:0xba62bb58df42d633">
                      Rachuonyo North
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps?cid=8031235320505341759">
                      Rachuonyo South
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
                      <h4>
                        <a href="tel:+01234567899">
                          {" "}
                          P.O Box 71-40300 Homa Bay
                        </a>
                      </h4>

                      <h5>
                        <a href="mailto:cdahomabay2013@gmail.com">
                          cdahomabay2013@gmail.com
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
      <iframe src="https://www.google.com/maps/d/embed?mid=106kAeTfFXR9anerPxESmgQCsseMQ44E&hl=en&ehbc=2E312F" width="640" height="480"></iframe>
        
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
          {/* <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/pics/port_1.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    coming soon
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>coming soon</a>
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
                  <img src="assets/images/pics/port_1.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    coming soon
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>coming soon</a>
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
                  <img src="assets/images/pics/port_1.jpg" alt="" />
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                  coming soon
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>coming soon</a>
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
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="button-box text-center wow fadeInUp">
                <Link href="/blog-standard">
                  <a className="main-btn bordered-btn bordered-yellow">
                    View News
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
export default PortfolioHb;
