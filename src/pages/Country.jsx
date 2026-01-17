import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi";
import { Loader } from "./Loader";
import { CountryCard } from "./CountryCard";
import { Search_Filter } from "./Search_Filter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // console.log(search);
  const searchCountry = (curElem) => {
    if (!search) return true;
    if (search) {
      return curElem.name.common.toLowerCase().includes(search.toLowerCase());
    }
  };

  // console.log(filter);
  const filterRegion = (curElem) => {
    if (filter === "all") return true;
    if (filter !== "all") {
      return curElem.region.toLowerCase() === filter.toLowerCase();
    }
  };

  // console.log(filteredCountries);
  const filteredCountries = countries.filter(
    (curElem) => searchCountry(curElem) && filterRegion(curElem)
  );

  return (
    <>
      <section className="">
        <Search_Filter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter} countries={countries} setCountries={setCountries}
        />
        <ul className="grid grid-cols-4">
          {filteredCountries.map((curElem, index) => {
            return <CountryCard country={curElem} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
