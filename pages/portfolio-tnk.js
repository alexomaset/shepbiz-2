import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
import { serviceSliderOne } from "../src/sliderProps";
const PortfolioTnk = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Macadamia"} pageName={"Value Chain"} />
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder wow fadeInUp">
                  <img src="assets/images/service/maca.jpg" alt=""/>
                </div>
                <div className="content text-center wow fadeInDown">
                  <h3 className="title">Macadamia Value Chain</h3>
                </div>
                <div className="service-content wow fadeInUp">
                  <p>
                    In the year 2021 the area under macadamia was estimated to
                    be 244 ha, which was a slight increase of 2ha from 242 ha
                    recorded in the previous year (2020). Generally, there has
                    been low expansion over the years. The total annual
                    production has also increased over the years with an average
                    productivity of 5t/ha generating over Kshs 129 Million in
                    the year 2021. For the project, the target sub-counties are
                    Maara, Muthambi and Chuka. These are the three subcounties
                    out of the six that are ecologically suited for macadamia
                    cultivation 2. Establishment of VC Platform for Macadamia
                    Nut VC in Tharaka Nithi ・Rationale/ Purpose The purpose of
                    the platform is to coordinate the improvement of macadamia
                    production and productivity among the value chain actors
                    ・Brief Introduction of Platform Members and Officials
                    (Representatives) The platform is composed of the following
                    management committee officials 1. Chairman 2. Vice Chairman
                    3. Secretary 4. Vice Secretary 5. Treasurer 6. Organizing
                    Secretary 7. Member 8. Member 9. Member
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
                      <a href="https://www.google.com/maps?q=Maara&ftid=0x182795c06e948061:0xcc54ea8ce6430d78">
                      Maara 
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps?q=Muthambi&ftid=0x1827beb74b3ff00f:0x1b88ad4f63a1917f">
                      Muthambi
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/url?q=https://maps.google.com/?q%3DChuka%26ftid%3D0x1827b87d15133c4b:0x989bec815b0252c5&sa=D&sntz=1&usd=2&usg=AOvVaw24G5yYso5kxD3IPcB8YKDa">
                       Chuka
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
                        <a href="tel:+01234567899">P.O Box 10-60406 KATHWANA</a>
                      </h4>

                      <h5>
                        <a href="mailto:cdatharakanithi@yahoo.com">
                          cdatharakanithi@yahoo.com
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
      <iframe src="https://www.google.com/maps/d/embed?mid=1fyUDMgPnW7z3P_2Kyajj45MbJDIIigo&hl=en&ehbc=2E312F" width="640" height="480"></iframe>
        
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
export default PortfolioTnk;
