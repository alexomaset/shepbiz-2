import Link from "next/link";
const Footer = ({ footer }) => {
  switch (footer) {
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => (
  <footer   className="footer-bg bg_cover p-r z-1 footer-white"
  style={{ backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)" }}
>
    <div className="container">
      {/* <div className="footer-top wow fadeInUp">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex justify-content-center">
              <div className="site-logo text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-1.png"
                      alt="Footer Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Locations</h5>
                <h6>
                  4th Floor, NHIF Building, Ngong Road/Haile Selassie Avenue,
                  Upper Hill, Nairobi
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Email Us</h5>
                <h6>
                  <a href="mailto:hotlineinfo@gmial.com">
                    info.shepunit@gmail.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-widget pt-70 pb-25">
        <FooterMenu />
      </div>
      <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp"></div>
      <div className="footer-copyright">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2022 Shepbiz. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer3 = () => (
  <footer
    className="footer-bg bg_cover p-r z-1 footer-white"
    style={{ backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)" }}
  >
    <div className="container">
      =
      <div className="footer-widget pb-25">
        <FooterMenu />
      </div>
      <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2022 Shepbiz. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer4 = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-newsletter footer-newsletter-two yellow-bg"></div>
      <div className="footer-widget pb-25">
        <FooterMenu />
      </div>
      <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2022 Shepbiz. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FooterMenu = () => (
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Related links</h4>
        <div className="footer-widget-nav">
          <ul>
            <li>
              <Link href="https://kilimo.go.ke/about-us/">Ministry of Agriculture & Livestock Development</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-7 col-sm-12">
      <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
        <h4 className="widget-title">Value Chains</h4>
        <div className="footer-widget-nav">
          <ul>
            <li>
              <Link href="portfolio-nakuru">Avocado Value Chain</Link>
            </li>
            <li>
              <Link href="portfolio-hb">Groundnuts Value Chain</Link>
            </li>
            <li>
              <Link href="portfolio-tnk">Macademia Value Chain</Link>
            </li>
            <li>
              <Link href="portfolio-busia">Milled Rice Value Chain</Link>
            </li>
            <li>
              <Link href="portfolio-kilifi">Cashew Nuts Chain</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="portfolio-details">Latest News</Link>
            </li>
            <li>
              <a href="#">Meet The Team</a>
            </li>
            <li>
              <a href="#">Setting &amp; Privacy</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Contact Us</h4>
        <div className="footer-about-content">
          <p>
            4th Floor, NHIF Building, Ngong Road/Haile Selassie Avenue, Upper
            Hill, Nairobi
          </p>
          <div className="info">
            <h6>Email Address</h6>
            <p>
              <a href="mailto:hotlinein@gmail.com">info.shepunit@gmail.com</a>
            </p>
            <h6>Tel</h6>
            <p>
              +254712504095 <br /> +254737293867
            </p>
            <p>
              <a href="mailto:www.info.net">www.shepbiz.net</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
