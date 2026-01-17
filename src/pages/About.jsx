import React from "react";
import countryData from "../API/countryData.json";

export const About = () => {
  return (
    <>
      <section className="py-10 px-5 md:px-20 bg-gradient-to-br from-[#d3f1a3] via-[#afecfa] to-amber-200 min-h-screen">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-lgm-1 text-center mx-2 leading-10 font-sans md:font-serif">
            🌍 Here are the interesting facts <br />
            <span className="text-amber-600 font-mono font-semibold">we are proud of</span>
          </h2>
          <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 col-3">
            {countryData.map((curElem) => {
              const { id, countryName, capital, population, interestingFact } =
                curElem;
              return (
                <div className="group bg-white shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#5c563d] via-[#3e5c37] to-[#4a4b4c] max-w-200 w-full h-full m-auto relative border-2 " key={id}>
                  <div className="">
                      <h3 className="card-title font-bold mb-4 text-center text-[#fff] transition-colors duration-300 group-hover:text-pink-500 hover:text-[#f0f] tracking-tight leading-5 italic text-3xl pb-2">
                        {countryName}
                      </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-medium leading-8 text-[#f8f1f1] text-lg max-w-xl">
                        <span>Capital :</span>
                        {capital}
                      </p>
                      <p className="font-medium leading-8 text-[#f8f1f1] text-lg max-w-xl">
                        <span>Population :</span>
                        {population}
                      </p>
                      <p className="font-medium leading-8 text-[#f8f1f1] text-lg max-w-xl">
                        <span>Interesting :</span>
                        {interestingFact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
