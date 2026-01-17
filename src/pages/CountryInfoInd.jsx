import React from "react";
import { Link } from "react-router";

export const CountryInfoInd = ({ countrySingle }) => {
  const {
    flags,
    name,
    capital,
    region,
    population,
    borders,
    currencies,
    languages,
    subregion,
    tld,
  } = countrySingle;
  return (
    <>
      <img src={flags.svg} alt={flags.alt} className="p-4" />
      <li className="p-5 mx-5">
        <div className="">
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
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>official :</span>
                {name.official}
              </p>
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>Subregion :</span>
                {subregion}
              </p>

              {/* <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>nativeName :</span>
                {Object.keys(name.nativeName).map((curElem)=>countries[curElem].name)}
              </p> */}

              <p className="font-medium leading-8 text-[#0e0d0d] text-lg">
                <span className="font-semibold">Native Names: </span>
                {Object.entries(name.nativeName).map(([key, value]) => (
                  <span key={key}>
                    {value.common} ({key}),
                  </span>
                ))}
              </p>

              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>borders :</span>
                {borders.map((curElem) => `${curElem}, `)}
              </p>
              <p className="font-medium leading-8 text-[#0e0d0d] text-lg max-w-xl">
                <span>Domain :</span>
                {tld[0]}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Link to="/country" className="">
            <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go back</button>
          </Link>
        </div>
      </li>
    </>
  );
};
