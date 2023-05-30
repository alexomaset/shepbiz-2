import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  const { title, content, slug, date } = post.fields;

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="blog-standard-wrapper">
            <div className="blog-post-item-three mb-60 wow fadeInUp">
              <div className="post-thumbnail">
                <img
                  src="assets/images/blog/download.jpeg"
                  alt="Post Image"
                  width="400"
                  height="200"
                />
              </div>
              <div className="entry-content white-bg">
                <a href="#" className="cat-btn">
                  {title}
                </a>
                <h3 className="title">
                  <Link href={"/blogs/" + slug}>
                    <a>{title}</a>
                  </Link>
                </h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">{date}</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
