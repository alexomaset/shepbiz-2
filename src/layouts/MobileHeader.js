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
        <li>
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">Value Chains</a>
          <ul className="sub-menu">
            <li>
              <Link href="/portfolio-nakuru">Avocado</Link>
            </li>
            <li>
              <Link href="/portfolio-hb">Groundnuts</Link>
            </li>
            <li>
              <Link href="/portfolio-tnk">Macadamia</Link>
            </li>
            <li>
              <Link href="/portfolio-busia">Milled Rice</Link>
            </li>
            <li>
              <Link href="/portfolio-kilifi">Cashew Nuts</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact">Contact Us</Link>
        </li>
        <li>
          <Link href="blog-standard">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;
