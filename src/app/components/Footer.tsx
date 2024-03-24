"use client";

import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto h-56">
      <div className="flex flex-col px-3 gap-3 lg:p-0 lg:flex-row">
        <div className="basis-1/2 flex-shrink-0 space-y-5">
          <Link href="/">
            <img
              className="max-w-24"
              src="/secondary-logo.png"
              alt="primary-logo"
            />
          </Link>
          <div className="">
            <h1>Insert tagline here.</h1>
          </div>
        </div>
        <div className="basis-1/4 space-y-3">
          <h1>Products</h1>
          <ul>
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
          </ul>
        </div>
        <div className="basis-1/4 space-y-3">
          <h1>Resources</h1>
          <ul>
            <li>Resources</li>
            <li>Resources</li>
            <li>Resources</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="basis-1/4 space-y-3">
          <h1>Blog</h1>
          <ul>
            <li>Blog</li>
            <li>Blog</li>
            <li>Blog</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
