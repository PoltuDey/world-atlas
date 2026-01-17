import React from "react";
import { Link } from "react-router";

export const CountryCard = ({ country }) => {
  const { flags, name, capital, region, population } = country;
  return (
    <>
      <li className="">
        <div className="">
          <img src={flags.svg} alt={flags.alt} className="p-4" />
          <div className="">
            <div className="">
              <p className="">{name.common}</p>
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>Capital :</span>
                {capital[0]}
              </p>
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>Population :</span>
                {population}
              </p>
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>Region :</span>
                {region}
              </p>
              <Link to={`/country/${name.common}`}>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

// https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags
