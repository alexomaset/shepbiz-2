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
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
                data-filter=".cat-1"
              >
                Avocado VC
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
                data-filter=".cat-2"
              >
                Macadamia VC
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
                data-filter=".cat-3"
              >
                Groundnuts VC
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-4")}`}
                onClick={handleFilterKeyChange("cat-4")}
                data-filter=".cat-4"
              >
                Milled Rice VC
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-5")}`}
                onClick={handleFilterKeyChange("cat-5")}
                data-filter=".cat-6"
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
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/blog/blog-standard-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/post-dets4">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/post-dets4">
                      <a>tag testing</a>
                    </Link>
                  </h3>
                  <p>
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
                    <a href="#">Avocado Value Chain Promotion</a>,
                    <a href="#"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/blog/blog-standard-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/post-dets1">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/post-dets1">
                      <a>dfghjk</a>
                    </Link>
                  </h3>
                  <p>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">1 June 2023</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                    <a href="#">Groundnuts Value Chain Promotion</a>,
                    <a href="#"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/blog/blog-standard-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/post-dets2">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/post-dets2">
                      <a>wesite</a>
                    </Link>
                  </h3>
                  <p>
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
                    <a href="#">Macademia Value Chain Promotion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-4">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/blog/blog-standard-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="">
                      <a>Busia County News</a>
                    </Link>
                  </h3>
                  <p>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">2 May 2023</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                    <a href="#">Rice Value Chain Promotion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-5">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/blog/blog-standard-3.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/blog-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Check</a>
                    </Link>
                  </h3>
                  <p>
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">1 June 2023</a>
                        </span>
                      </li>
                    </ul>
                    <a href="#"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioGridIsotope;
