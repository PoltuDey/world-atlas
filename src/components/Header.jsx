import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Header.css";

export const Header = () => {
  const [showHide, setShowHide] = useState(false);

  const handleToggleButton = () => {
    return setShowHide(!showHide);
  };

  return (
    <>
      <header className=" bg-white w-full border-gray-200 dark:bg-gray-900 mx-auto px-20">
        <div className="grid grid-cols-3 items-center h-15">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WorldAtlas
            </span>
          </Link>

          <nav
            className={`${
              showHide ? "mobile" : "web"
            } col-span-2 md:block md:w-auto p-4`}
          >
            <ul className="font-medium flex justify-end flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/country"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Country
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="menu col-span-2 hidden">
            <button
              onClick={handleToggleButton}
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
