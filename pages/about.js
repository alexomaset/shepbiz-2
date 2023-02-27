import Link from "next/link";
import Slider from "react-slick";
import OrgariumCounter from "../src/components/OrgariumCounter";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layouts/Layout";
import ProjectOneSlider from "../src/components/sliders/ProjectOneSlider";
import { logoSlider, testimonialSliderOne } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">About Us</span>
                  <h4>
                    Project for smallholder empowerment &amp; Agribusiness
                    promotion in the Republic of Kenya
                  </h4>
                </div>
                <p>
                  Project for smallholder empowerment and Agribusiness promotion
                  borrows from success of various phases of SHEP which were
                  promoting SHEP approach. From 2006 to 2010 (SHEP), 2010-2015
                  (SHEP UP),2015 to 2020 (SHEP PLUS) and 2020 to 2025 (SHEP
                  Biz). The current phase has two components, Component 1; which
                  promotes SHEP Approach and Component 2; Value Chain and
                  Agribusiness promotion. The second component of SHEP Biz was
                  formed to contribute to the achievement of Agriculture Sector
                  Transformation and Growth Strategy (ASTGS) which is a
                  development strategy for the agricultural sector from
                  2019-2029.The ASTGS shall be implemented through three anchors
                  which are geared towards, firstly, to increase small-scale
                  farmer incomes, secondly to increase agricultural output
                  and value addition and lastly to boost household food
                  resilience. The project shall contribute to increasing
                  smallholder farmers’ income and to increase agricultural
                  output and value addition. The project shall also support the
                  Economic pillar of Kenya’s Vision 2030 which focuses to
                  maintain a sustained economic growth of 10% per year upto the
                  year 2030. In choosing value chains and target Counties County
                  Integrated Development Plan (CIDP) was considered alongside an
                  elaborate selection criteria. This shall be achieved by
                  addressing the challenges that impede efficiency of the
                  targeted value chains, which are Cashew nut (Kilifi),
                  macadamia (Tharaka Nithi), Avocado (Nakuru), Groundnuts (Homa
                  Bay), and Rice (Busia). In this regard, value chain platforms
                  have been formed for each value chain to oversee the
                  implementation of the strategic action plans which were
                  developed together by the micro actors, meso
                  actors(supporters) and the macro actors (enablers and
                  regulators) of the value chains. Overall project
                  implementation shall be guided by the Programme Design Matrix
                  (2020- 2025). The Overall Goal of the project is to ensure
                  Livelihoods in the target counties are improved and the
                  component purpose is to strengthen the Capacity to support
                  target agribusinesses. The component has two Outputs, the
                  first one to develop interventions to address challenges in
                  the target Value Chains and the second one is to increase
                  business performance of the target MSMEs.
                </p>
                {/* <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Increase small-scale farmer incomes,</h5>
                      <p>
                        The project aims to contribute through support of
                        small-scale farmers through the support of agribusiness
                        corporative{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>
                        Increase agricultural production/build value chains
                      </h5>
                      <p>
                        The project aims to contribute through increase
                        agricultural production and added value,{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Strengthen resilience to food shortages.</h5>
                      <p>
                        The project aims to contribute by strengthen public and
                        private business capabilities.{" "}
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="about-button wow fadeInUp">
                  {/* <Link href="/about">
                    <a className="main-btn btn-yellow">Learn More Us</a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                <img
                  src="assets/images/service/maca.jpg"
                  className="about-img_one"
                  // height={500}
                  alt=""
                />
                 <img
                  src="assets/images/service/cashew.jpg"
                  className="about-img_one"
                  width={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <ProjectOneSlider />
      {/*====== End Gallery Section ======*/}
      {/*====== Start Why choose Section ======*/}
      {/* <section className="why-choose-two p-r z-1 pt-50 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12">
              <div className="choose-two_content-box">
                <div className="section-title section-title-left mb-40 wow fadeInLeft">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Very Much Professional Growing Company</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="row pl-lg-70">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <ProgressBar value={75} color="#eece38" />
                    <div className="text">
                      <h5>Organic Foods Provides</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInDown">
                    <ProgressBar value={86} color="#eece38" />
                    <div className="text">
                      <h5>Reforming The Systems</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <ProgressBar value={53} color="#eece38" />
                    <div className="text">
                      <h5>Eco Fridendly Farming</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Why choose Section ======*/}
      {/*====== Start Partners Section ======*/}
      {/* <section className="partners-section">
        <div className="container-1350">
          <div className="partners-wrap-two yellow-bg pb-60 pt-50 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h4>We Have More Then 1235+ Global Partners</h4>
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
                    src="assets/images/partner/img-1.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-2.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-4.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-5.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-6.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>{" "} */}
      {/*====== End Partners Section ======*/}
      {/*====== Start Farmers Section ======*/}
      {/* <section className="farmers-team_two light-gray-bg pb-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Farmers</span>
                <h2>We Have Lot’s Of Experience Team Members</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-button float-lg-right mb-60 wow fadeInRight">
                <Link href="/farmers">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Become a Member
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-1.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Dennis P. Russell</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-2.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>David M. Hower</a>
                    </Link>
                  </h3>
                  <p className="position">General Manager</p>
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
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-3.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Richard M. Howell</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-4.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Keneth R. Williams</a>
                    </Link>
                  </h3>
                  <p className="position">Food Farmers</p>
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
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Farmers Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section pt-130">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Clients Say About Our Organic Foods</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSliderOne} className="testimonial-slider-one">
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-1.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael R. Jordan</h4>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-3.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Somalia D. Silva</h4>
                  <p className="position">Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-4.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael D. Slaughter</h4>
                  <p className="position">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Counter Section ======*/}
      {/* <section className="fun-fact-one pt-30 pb-130">
        <div className="big-text mb-75 wow fadeInUp">
          <h2>Statistics</h2>
        </div>
        <div className="container">
          <div className="counter-wrap-one wow fadeInDown">
            <div className="counter-inner-box">
              <OrgariumCounter />
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default About;
