import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import OrgariumCounter from "../src/components/OrgariumCounter";
import ProgressBar from "../src/components/ProgressBar";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import {
  heroSliderOne,
  logoSlider,
  projectsSliderTwo,
  serviceSliderOne,
} from "../src/sliderProps";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <section className="hero-area-three">
        <Slider {...heroSliderOne} className="hero-slider-one">
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/cov_2.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              {/* <img src="assets/images/icon/wheat.png" alt="" /> */}
              <h3>Shepbiz</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Shepbiz
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Value Chain &amp; Agribusiness Promotion
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/cov_3.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              {/* <img src="assets/images/icon/wheat.png" alt="" /> */}
              <h3>Shepbiz</h3>
            </div>
            <div className="container">
            <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Shepbiz
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Value Chain  &amp; Agribusiness Promotion
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/cov_4.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              {/* <img src="assets/images/icon/wheat.png" alt="" /> */}
              <h3>Shepbiz</h3>
            </div>
            <div className="container">
            <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Shepbiz
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Value Chain  &amp; Agribusiness Promotion
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section p-r z-1 pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-one_content-box mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>Vision &amp;Mission Statement </h2>
                </div>
                <div
                  className="quote-text mb-35 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <p>
                    The project, with a primary objective of overseeing and
                    managing component 2, endeavors to conduct a comprehensive
                    demonstration and verification of the various support
                    measures that have been implemented.
                  </p>
                </div>
                <Tab.Container defaultActiveKey={"mission"}>
                  <div className="tab-content-box wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-20">
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="mission"
                          href="#mission"
                        >
                          Our Mission
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="vision"
                          href="#vision"
                        >
                          Our Vision
                        </Nav.Link>
                      </li>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="mission">
                        <div className="content-box-gap">
                          <p>
                            The process of identifying the challenges faced by
                            farmers and small to medium-sized agribusiness
                            enterprises in regards to the utilization of venture
                            capital has been thoroughly examined. With a
                            comprehensive understanding of the difficulties at
                            hand, it is imperative to prioritize interventions
                            that will effectively overcome these obstacles in
                            order to provide support to this important sector of
                            the economy. By highlighting the most pressing
                            concerns and taking proactive measures to address
                            them, we can help ensure the success and growth of
                            farmers and agribusiness enterprises.
                          </p>
                          {/* <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div> */}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="vision">
                        <div className="content-box-gap">
                          <p>
                            The focus is shifted towards implementing and
                            validating interventions aimed at overcoming the
                            challenges faced by farmers and small to
                            medium-sized agribusiness enterprises in the realm
                            of venture capital. By taking action and testing the
                            effectiveness of these solutions, we strive towards
                            realizing our vision of providing support to this
                            vital sector of the economy, thus promoting its
                            growth and success.
                          </p>
                          {/* <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div> */}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-one_image-box p-r mb-50 pl-100">
                <div className="about-img_one wow fadeInLeft">
                  <img
                    src="assets/images/portfolio/macade.jpg"
                    alt="About Image"
                  />
                </div>
                <div className="about-img_two wow fadeInRight">
                  <img
                    src="assets/images/portfolio/macade.jpg"
                    alt="About Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section border-bottom-1"></section>
      {/*====== End Features Section ======*/}
      {/*====== Start Counter Section ======*/}
      {/*====== End Counter Section ======*/}
      <section className="service-one dark-black-bg pt-130 pb-125 p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/tree1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/tree2.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                  <span className="sub-title">Our Stakeholders</span>
                  <h1 className="sub-title">Micro Value Chain Actors</h1>
                </div>
              </div>
            </div>
            <div className="features-wrap-two wow fadeInUp">
              <h4 className="text-white">
                Operators directly involved in getting the product from farm to
                final consumer (Input supplier, Producer, Aggregator, Processor,
                Retailer…etc.)
              </h4>
              {/* <div className="features-item-two">
                <div className="fill-number">01</div>
                <div className="icon">
                  <i className="flaticon-tractor" />
                </div>
                <div className="text-white">
                  <h5>Input</h5>
                </div>
              </div>
              <div className="features-item-two">
                <div className="fill-number">02</div>
                <div className="icon">
                  <i className="flaticon-tractor" />
                </div>
                <div className="text-white">
                  <h5>Production</h5>
                </div>
              </div>
              <div className="features-item-two">
                <div className="fill-number">03</div>
                <div className="icon">
                  <i className="flaticon-social-care" />
                </div>
                <div className="text-white">
                  <h5>Processing &amp; Packing</h5>
                </div>
              </div>
              <div className="features-item-two">
                <div className="fill-number">04</div>
                <div className="icon">
                  <i className="flaticon-farming" />
                </div>
                <div className="text-white">
                  <h5>Storage &amp; Logistics </h5>
                </div>
              </div>
              <div className="features-item-two">
                <div className="fill-number">04</div>
                <div className="icon">
                  <i className="flaticon-farming" />
                </div>
                <div className="text-white">
                  <h5>Export</h5>
                </div>
              </div> */}
              {/* <div className="features-item-two">
                <div className="fill-number">04</div>
                <div className="icon">
                  <i className="flaticon-farming" />
                </div>
                <div className="text-white">
                  <h5>Retail &amp; Marketing</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                  <h2 className="sub-title">Meso Value Chain Actors</h2>
                </div>
              </div>
            </div>
            <div className="features-wrap-two wow fadeInUp">
              <h4 className="text-white">
                Public and private service providers involved in supporting VC
                Actors (Governmental Services, Donor Project, Financial
                Services, Research…etc)
              </h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                  <h2 className="sub-title">Macro Value Chain Actors</h2>
                </div>
              </div>
            </div>
            <div className="features-wrap-two wow fadeInUp">
              <h4 className="text-white">
                Stakeholders providing enabling framework conditions for SME
                businesses relating to legislation, standards, infrastructure
                etc. they include National, Policymakers, regulatory bodies,
                Federations and/or associations.
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Fun Fact Section ======*/}
      <section className="service-one dark-black-bg pt-130 pb-125 p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/tree1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/tree2.png" alt="" />
          </span>
        </div>
      </section>
      {/*====== End Fun Fact Section ======*/}
      {/*====== Start CTA Section ======*/}
      {/* <section className="cta-one p-r">
        <div className="container-fluid">
          <div className="cta-wrap-one">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInLeft"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-1.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Project Area</h2>
                    <Link href="/contact">
                      <a className="main-btn bordered-btn bordered-white">
                        Counties
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInRight"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-2.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Targeted VCs</h2>
                    <Link href="/contact">
                      <a className="main-btn bordered-btn bordered-white">
                        View
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End CTA Section ======*/}
      {/*====== Start Service Section ======*/}

      {/*====== End Service Section ======*/}
      {/*====== Start Partners Section ======*/}
      {/* <section className="partners-two">
        <div className="container-1350">
          <div className="partners-wrap-one yellow-bg pb-60 pt-50 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h4>Our Partners</h4>
                </div>
              </div>
            </div>
            <Slider
              {...logoSlider}
              className="partner-slider-one wow fadeInDown"
            >
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-0.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-01.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-0.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-01.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-0.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-01.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-01.png"
                    alt="partner image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default Index3;
