import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
import { serviceSliderOne } from "../src/sliderProps";
const PortfolioBusia = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Milled Rice"} pageName={"Value Chain"} />
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder wow fadeInUp">
                  <img src="assets/images/service/milled-b.jpg" alt="" />
                </div>
                <div className="content text-center wow fadeInDown">
                  <h3 className="title">Milled Rice Value Chain</h3>
                </div>
                <div className="service-content wow fadeInUp">
                  <p>
                    The current annual rice paddy production in Kenya is 188,000
                    tons and gross value of output is Ksh. 11,130 million
                    whereas in Busia County the current rice paddy production is
                    5,751 tons. In the year 2020 the rice paddy production in
                    the country was 180,890 tons and gross value of output was
                    Ksh. 10,457 million and for the County rice paddy production
                    was 3492 tons (KNBS Economic Survey, 2022). The most
                    commonly adopted system of rice production the County is
                    irrigated schemes system (40%) while there are other rice
                    production systems; rainfed lowland and upland that share
                    the remaining proportion of 30% each. At the sub county
                    level, irrigated scheme system takes 100% in Bunyala, where
                    the main irrigation scheme in the County is situated.
                    Rain-fed lowland system is mainly in Teso south (100%) and
                    rain-fed upland is practiced in Nambale (82%) and Teso North
                    (71%). In the County rice is a priority crop in that; it is
                    a food security crop and a major cash crop for the
                    residents. Among the priority crops in the County, it is a
                    major source of revenue generation Ksh. 115 million in 2022
                    and 144 million in 2021 (Ministry of Agriculture). Despite
                    its importance and the potential, the rice value chain faces
                    a myriad of challenges that have hindered the development of
                    the value chain. If these challenges were to be addressed,
                    it would completely transform the value chain and it would
                    have ripple effects to interrelated value chains, sector and
                    the county economy as a whole. Among other challenges
                    SHEP-Biz Component 2 (Value Chain and Agribusiness
                    promotion) aims to address is that of continuous outflow of
                    paddy to Uganda and the outcome has been detrimental to the
                    value chain. From the SHEP-Biz survey (2021) 84% of rice
                    paddy produced crosses over to Uganda in unprocessed form
                    while 16% is processed locally. Some of the rice paddy
                    processed in Uganda makes it back to the country as milled
                    rice while most of the rice never makes it back into the
                    country. This has negatively affected the development of
                    rice value chain at each node within the county. Contrary,
                    if processing of all the rice paddy was to be done locally
                    within the county, it would completely overhaul the whole
                    value chain. The project is implemented in 3 sub-counties;
                    Bunyala, Teso South and Nambale. There is also an active
                    Rice Value Chain Platform in place and the composition
                    include; chairperson, vice chairperson, organizing
                    secretary, vice organizing secretary, treasurer, executive
                    members and EX Official members. The purpose of the platform
                    is to strengthen the interaction and coordination of the
                    value chain stakeholders/ players within the county. Through
                    these the platform would ensure efficiency and
                    sustainability of the rice value chain within the county.
                    The County Government of Busia in collaboration with
                    SHEP-Biz will take lead role but will be closely working
                    with other partners in implementing the project’s strategic
                    action plan during the project period.
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
                        Nambale
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Bunyala
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Teso South
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
                    backgroundImage: "url(assets/images/contact/payphone.jpg)",
                  }}
                >
                  <div className="contact-info-box text-center">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="info">
                      <h4>
                        <a href="tel:+01234567899">P.O. BOX 28-50400</a>
                      </h4>
                      <h5>
                        <a href="mailto:cdabusia@gmail.com">
                          cdabusia@gmail.com
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
      <iframe src="https://www.google.com/maps/d/embed?mid=1y1V-T3z0jwUYMM27jLbx26j1ZgrbKC8&ehbc=2E312F" width="640" height="480"></iframe>
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
export default PortfolioBusia;
