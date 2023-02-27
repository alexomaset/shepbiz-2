import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { serviceSliderOne } from "../src/sliderProps";
const ServicesDetails = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Avocado"} pageName={"details"} />
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
                  <p>
                    Nemo enim epsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit seduia consequuntur magni dolores eosratione
                    voluptatem
                  </p>
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
                  <div className="choose-item-list mb-50">
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>100% Natural Foods</h5>
                        <p>
                          Accusantium doloremque laudatium, totam rem aperiam
                          inventore veritatis et quasi architecto beatae{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>Modern Euipments</h5>
                        <p>
                          Accusantium doloremque laudatium, totam rem aperiam
                          inventore veritatis et quasi architecto beatae{" "}
                        </p>
                      </div>
                    </div>
                    <div className="single-choose-item mb-30">
                      <div className="text">
                        <h5>World Class Team</h5>
                        <p>
                          Accusantium doloremque laudatium, totam rem aperiam
                          inventore veritatis et quasi architecto beatae{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4>Benitif Agriculture Foods</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    oditaut fugised quia consequunte magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem quia dolor sit amet consectetur adipisci velit
                    sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-tractor" />
                        </div>
                        <div className="text">
                          <h5>Modern Agriculture Equipment</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-tractor" />
                        </div>
                        <div className="text">
                          <h5>Organic and Fresh Harvest</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-tractor" />
                        </div>
                        <div className="text">
                          <h5>Lot’s Professional &amp; Expert Farmers</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="features-item-three d-flex mb-40 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-tractor" />
                        </div>
                        <div className="text">
                          <h5>Provide Full Natural Goodness</h5>
                        </div>
                      </div>
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
                <div className="widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Sub-counties</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Nakuru
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nakuru
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nakuru
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nakuru
                        <span>
                          <i className="far fa-arrow-right" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nakuru
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
                    backgroundImage: "url(assets/images/widget/contact-1.jpg)",
                  }}
                >
                  <div className="contact-info-box text-center">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="info">
                      <h4>
                        <a href="tel:+01234567899">+0123 (456) 7899</a>
                      </h4>
                      <h5>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
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
      {/*====== End service-details-section Section ======*/}
      <section className="service-section light-gray-bg pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50">
                <h2>Action Plan</h2>
              </div>
            </div>
          </div>
          <Slider {...serviceSliderOne} className="service-slider-one">
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="/service-details">
                    <a>Organic Foods</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consectetur adipisc elit sed eiusmod tempor incdunt
                  labore et dolore magna
                </p>
                <Link href="/service-details">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="/service-details">
                    <a>Fresh Fruits</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consectetur adipisc elit sed eiusmod tempor incdunt
                  labore et dolore magna
                </p>
                <Link href="/service-details">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/service/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="/service-details">
                    <a>Organic Fruits</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consectetur adipisc elit sed eiusmod tempor incdunt
                  labore et dolore magna
                </p>
                <Link href="/service-details">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link href="/service-details">
                    <a>Processed Nuts</a>
                  </Link>
                </h3>
                <p>
                  Sit amet consectetur adipisc elit sed eiusmod tempor incdunt
                  labore et dolore magna
                </p>
                <Link href="/service-details">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>{" "}
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
export default ServicesDetails;
