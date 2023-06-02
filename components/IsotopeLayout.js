import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioGridIsotope = ({ posts }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-row", {
        itemSelector: ".project-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".project-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="portfolio-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All
              </li>
              <li
                className={`c-pointer ${activeBtn("avocado_vc")}`}
                onClick={handleFilterKeyChange("avocado_vc")}
                data-filter=".avocado_vc"
              >
                Avocado VC
              </li>
              <li
                className={`c-pointer ${activeBtn("macadamiaVc")}`}
                onClick={handleFilterKeyChange("macadamiaVc")}
                data-filter=".macadamiaVc"
              >
                Macadamia VC
              </li>
              <li
                className={`c-pointer ${activeBtn("groudnutsVc")}`}
                onClick={handleFilterKeyChange("groudnutsVc")}
                data-filter=".groudnutsVc"
              >
                Groundnuts VC
              </li>
              <li
                className={`c-pointer ${activeBtn("riceVc")}`}
                onClick={handleFilterKeyChange("riceVc")}
                data-filter=".riceVc"
              >
                Milled Rice VC
              </li>
              <li
                className={`c-pointer ${activeBtn("cashewVc")}`}
                onClick={handleFilterKeyChange("cashewVc")}
                data-filter=".cashewVc"
              >
                Cashew Nuts VC
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row project-row">
      {/* {posts.map((post) => (
          <div key={post.id} className={`grid-item ${post.tags}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))} */}
        {/* <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/avocado-2.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-nakuru">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-nakuru">
                      <a>Nakuru County</a>
                    </Link>
                  </h3>
                  <p>
                    <a href="#">Avocado Value Chain Promotion</a>,<a href="#"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/macademia.jpeg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-tnk">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-tnk">
                      <a>Tharaka Nithi County</a>
                    </Link>
                  </h3>
                  <p>
                    <a href="#">Macademia Value Chain Promotion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-4">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/rice-1.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-busia">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-busia">
                      <a>Busia County</a>
                    </Link>
                  </h3>
                  <p>
                    <a href="#">Rice Value Chain Promotion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-5">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/groundnuts-2.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-hb">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-hb">
                      <a>Homa Bay County</a>
                    </Link>
                  </h3>
                  <p>
                    <a href="#">Groundnuts Value Chain Promotion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};
export default PortfolioGridIsotope;