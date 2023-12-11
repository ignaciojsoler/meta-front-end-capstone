import { useState } from "react";
import logoType from "../assets/Logo.svg";
import { navigation } from "../data/pages";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);

  return (
    <header className="fixed w-full bg-white z-30 shadow-lg">
      <nav className="w-full max-w-4xl mx-auto px-4 py-6 flex justify-between items-center bg-white z-30">
      <a href="/" className="text-4xl font-bold relative z-20">
        <img src={logoType} alt="Logo" className="h-8" />
      </a>
      <ul className="hidden lg:flex gap-8">
        {navigation.map((page) => (
          <li key={page.name}>
            <Link to={page.href} className="font-bold hover:text-gray-500">{page.name}</Link>
          </li>
        ))}
      </ul>
      <button
        className="flex flex-col gap-y-1 text-4xl relative z-20 lg:hidden"
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
        className={`lg:hidden bg-white px-8 py-24 fixed top-0 w-full min-h-screen transition-all duration-300 ease-in-out shadow-xl z-10 ${
          displayMobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <ul className="lg:hidden flex flex-col gap-4">
          {navigation.map((page) => (
            <li key={page.name}>
              <Link to={page.href} className="font-bold hover:text-gray-500">{page.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
    </header>
  );
};

export default Navbar;
