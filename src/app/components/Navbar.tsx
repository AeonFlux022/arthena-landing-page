import Link from "next/link";
import React from "react";

const Navbar= ()  => {
  const menu = [
    { name: 'Home', url: '/' },
    { name: 'Link 1', url: 'link1' },
    { name: 'Link 2', url: 'link2' },
    { name: 'Link 3', url: 'link3' },
  ]
  return (
    <nav className="bg-primary text-neutral shadow py-4 px-8 flex flex-wrap justify-between">
      <div className="flex">
        <Link href="/">
          <img className="flex max-w-16" src="/arthena-logo-white.png" />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-5">
        {menu.map((x, index) => (
          <Link href={x.url}
          key={index}
          className="flex hover:bg-secondary hover:text-black rounded py-2 px-3">
            {x.name}
          </Link>
        ))}
        <button className="flex bg-secondary py-2 px-3 rounded text-black">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar;