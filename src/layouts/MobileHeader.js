import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <Link href="/" className="active">
            Home
          </Link>
          <ul className="sub-menu" style={activeLi("home")}>        
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

         <li className="menu-item has-children">
        <a href="#">Value Chains</a>
        <ul className="sub-menu">
          <li>
            <Link href="/services">Avocado</Link>
          </li>
          <li>
            <Link href="/service-details">Groundnuts</Link>
          </li>
          <li>
            <Link href="/service-details">Macademia</Link>
          </li>
          <li>
            <Link href="/service-details">Milled & Rice</Link>
          </li>
          <li>
            <Link href="/service-details">Cashew Nuts</Link>
          </li>
        </ul>
      </li>
        <li className="menu-item has-children">
          <Link href="portfolio-grid">Counties</Link>
          <ul className="sub-menu" style={activeLi("Counties")}>
            <li>
              <Link href="portfolio-grid">Target Counties</Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Portfolio")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="blog-standard">Blog</a>
          <ul className="sub-menu" style={activeLi("Blog")}>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;
