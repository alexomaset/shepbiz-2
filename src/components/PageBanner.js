import Link from "next/link";

const PageBanner = ({ pageName, pageTitle, pageImage }) => {
  return (
    <section
      className="page-banner bg_cover position-relative z-1"
      style={pageImage ? pageImage: { backgroundImage: "url(assets/images/hero/hero_three-slider-9.jpg)" }}
    >
      {/* <div className="brand-card text-center">
        <img src="assets/images/icon/icon-1.png" alt="icon" />
        <h3>Shepbiz</h3>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="page-title">
              <h1>{pageTitle ? pageTitle : pageName}</h1>
              <ul className="breadcrumbs-link">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
