import React from "react";
import footerContact from "../API/footer.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <>
      <footer>
        <div className="grid grid-cols-3 p-6 gap-3 bg-[#f8f8cc]">
          {footerContact.map((curElem, index) => {
            const { icon, title, details } = curElem;
            return (
              <div className=" " key={index}>
                <div className="">{footerIcon[icon]}</div>
                <div className="">
                  <p className="">{title}</p>
                  <p className="">{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto w-full max-w-screen-xl bg-white dark:bg-gray-900">
          <div className="bg-[#fdf7f2] grid grid-cols-1 gap-8 px-6 py-8 lg:py-12 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="/about"
                    className=" hover:underline hover:text-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="hover:underline hover:text-gray-700"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-700">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2025 <Link to="https://flowbite.com/">WorldAtlas™</Link>. All
              Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebookF className="w-4 h-4" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagram className="w-4 h-4" />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaDiscord className="w-4 h-4" />
                <span className="sr-only">Discord community</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaXTwitter className="w-4 h-4" />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedinIn className="w-4 h-4" />
                <span className="sr-only">Linkedin page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-4 h-4" />
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaDribbble className="w-4 h-4" />
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
