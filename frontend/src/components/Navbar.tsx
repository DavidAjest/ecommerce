import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linksStyle =
    "text-grey-100 font-bold text-sm px-2 py-1  border-grey-100 hover: bg-grey-100 hover:text-gray-800 rounded-lg transition duration-300";

  const links = (
    <ul className="flex flex-col md:flex-row">
      <li>
        <a className={linksStyle} href="/home">
          Home
        </a>
      </li>
      <li>
        <a className={linksStyle} href="/store">
          Store
        </a>
      </li>
      <li>
        <a className={linksStyle} href="/about">
          About
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0">
      <div className="flex flex-row justify-between items-center max-w-9/10 mx-auto h-16">
        <div>
          <div>brand name</div>
        </div>
        <div className="hidden md:flex">{links}</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>icon</button>
        </div>
      </div>

      {isOpen && <div className="md:hidden">{links}</div>}
    </nav>
  );
}
