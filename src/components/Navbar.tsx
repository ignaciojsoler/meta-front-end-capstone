import { useState } from "react";
import logoType from "../assets/Logo.svg";
import { pages } from "../data/pages";

const Navbar = () => {

  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);

  return (
    <nav className="w-full max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
      <a href="/" className="text-4xl font-bold relative z-10">
        <img src={logoType} alt="Logo" className="h-8" />
      </a>
      <ul className="hidden lg:flex gap-8">
        {pages.map((page) => (
          <li key={page.name}>
            <a href={page.href}>{page.name}</a>
          </li>
        ))}
      </ul>
      <button
        className="flex flex-col gap-y-1 text-4xl relative z-10 lg:hidden"
        onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
      >
        <span
          className={`w-8 h-1 bg-black relative transition-all duration-300 ${
            displayMobileMenu ? " rotate-45 top-2" : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black relative transition-all duration-300 ${
            displayMobileMenu ? " scale-x-0 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black relative transition-all duration-300 ${
            displayMobileMenu ? " -rotate-45 -top-2" : ""
          }`}
        ></span>
      </button>
      <aside
        className={`lg:hidden bg-white px-8 py-24 absolute top-0 w-full min-h-screen transition-all duration-300 ease-in-out shadow-xl ${
          displayMobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <ul className="lg:hidden flex flex-col gap-4">
          {pages.map((page) => (
            <li key={page.name}>
              <a href={page.href}>{page.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
