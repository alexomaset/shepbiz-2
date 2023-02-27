import PageBanner from "../src/components/PageBanner";
// import PortfolioGridIsotope from "../src/components/PortfolioGridIsotope";
import Link from "next/link";
import Layout from "../src/layouts/Layout";

import dynamic from "next/dynamic";

const PortfolioGridIsotope = dynamic(
  () => import("../src/components/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);

const Portfolio = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Counties"} pageName="Target Counties" />
      <section
        className="project-grid-page p-r z-1 pt-170 pb-130"
        id="project-filter"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Target Counties</span>
      
              </div>
            </div>
          </div>
          <div className="map-box">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=16WckAUQ-0Y_KBmwbEKDhRvQ3vZpIWE8T" width="1200" height="650"></iframe>
          </div>
          {/* <PortfolioGridIsotope /> */}
        </div>
      </section>
    </Layout>
  );
};
export default Portfolio;
