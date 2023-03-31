import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
import { serviceSliderOne } from "../src/sliderProps";

const PortfolioNakuru = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Avocado"} pageName={"Value Chain"} />
      <section className="service-details-section pt-170 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details-wrapper">
                <div className="img-holder wow fadeInUp">
                  <img src="assets/images/service/avocado-nak.jpg" alt="" />
                </div>
                <div className="content text-center wow fadeInDown">
                  <h3 className="title">Avocado Value Chain</h3>
                </div>
                <div className="service-content wow fadeInUp">
                  <p>
                    Kenya is the leading exporter of avocado in Africa(HCD,2020)
                    and among the top 10 world&#39;s largest exporters although
                    it only exported 10% of its total avocado production.
                    Between 2019 and 2020, the area under the crop increased
                    from 20,240ha to 26,482ha in 2020 while production increased
                    from 420,430tons to 500,274tons, 31 percent and 19 percent
                    increase respectively. The value on the other hand increased
                    from Kshs9billion in 2019 to Kshs9.4billion in 2020 In
                    Kenya, Nakuru County is the 3 rd leading exporter after
                    Murang’a and Kiambu Counties (HCD, 2020). All its 11
                    subcounties have great potential for Avocado production.
                    Currently, major producing subcounties are Subukia, Bahati,
                    Njoro, Gilgil, Kuresoi South and Molo. Since 2017, The
                    Nakuru County Government has aggressively promoted avocado
                    production by providing free quality planting material to
                    the farming community. This has led to a rapid increase to
                    the area under the crop. By 2021, the county reported an
                    estimated hactarage of 1553ha (mature trees) yielding 24,501
                    MT valued at Kshs701, 447,587. The Project for Small Holder
                    Empowerment and Agribusiness Promotion (SHEP Biz) targets to
                    work with value chain actors from the 6 main producing areas
                    to improve and strengthen the value chain by addressing the
                    major challenges A meeting with different actors in the
                    avocado value chain in the County established a Nakuru
                    Avocado Platform to spearhead issues affecting the Industry
                    in the County. The platform members are drawn from all the
                    value chain nodes namely inputs, production, marketing and
                    export
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
                      <a href="https://www.google.com/maps/place/Subukia/@-0.0402899,36.195713,12z/data=!3m1!4b1!4m6!3m5!1s0x1829e027e73b73dd:0x9cb840958b6db58d!8m2!3d-0.0018807!4d36.2278245!16s%2Fg%2F12q4xswfr">
                        Subukia
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Bahati/@-0.1589583,36.1469292,15z/data=!3m1!4b1!4m6!3m5!1s0x1829eeef7a8cc9e3:0xf9dabdb15c9d8e54!8m2!3d-0.1566522!4d36.1463934!16s%2Fg%2F1tlr29hd">
                        Bahati
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Njoro/@-0.3558513,35.8735334,12z/data=!3m1!4b1!4m6!3m5!1s0x182989b446c27b5d:0x5bf9034a36b2ad32!8m2!3d-0.3721309!4d35.9478869!16zL20vMGQ0dHJ3">
                        Njoro
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Molo/@-0.2488009,35.7236337,15z/data=!3m1!4b1!4m6!3m5!1s0x182a17e4087834f9:0x9a8f01cc38850634!8m2!3d-0.2488358!4d35.7323709!16s%2Fm%2F026bzz4">
                        Molo
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Gilgil/@-0.4973824,36.2848369,13z/data=!3m1!4b1!4m6!3m5!1s0x18290a4616ffebf3:0x84fccb5d1bd6de99!8m2!3d-0.4922735!4d36.3172993!16zL20vMGZtNjIy">
                        Gilgil
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/place/Kuresoi/@-0.3008674,35.5261159,16z/data=!3m1!4b1!4m6!3m5!1s0x182a40d17a6b68ed:0xc979e3f1eab28270!8m2!3d-0.2992992!4d35.5302127!16s%2Fg%2F1pyqg0sd0">
                        Kuresoi South
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
                        <a href="tel:+01234567899">P.O Box 530-20100</a>
                      </h4>
                      <h5>
                        <a href="mailto:cdanakuru@gmail.com;">
                          cdanakuru@gmail.com;
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
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=16WckAUQ-0Y_KBmwbEKDhRvQ3vZpIWE8T" width="500" height="650"></iframe>
        
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
export default PortfolioNakuru;
