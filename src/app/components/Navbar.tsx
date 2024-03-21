import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menu = [
    { name: 'Home', url: '/' },
    { name: 'Link 1', url: 'link1' },
    { name: 'Link 2', url: 'link2' },
    { name: 'Link 3', url: 'link3' },
  ]
  return (
    <section>
      <nav className="bg-neutral text-dark py-4 flex flex-wrap items-center justify-between">
        <div className="flex">
          <Link href="/">
            <img className="flex max-w-16" src="/primary-logo.png" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          {menu.map((x, index) => (
            <Link href={x.url}
            key={index}
            className="flex hover:bg-secondary hover:text-black py-2 px-3">
              {x.name}
            </Link>
          ))}
          {/* <button className="flex bg-secondary p-3 text-black font-bold">Sign Up</button> */}
        </div>
      </nav>
    </section>

  )
}

export default Navbar;