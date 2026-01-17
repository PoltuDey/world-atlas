import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router";
import { getCountryIndData } from "../API/postApi";
import { Loader2 } from "./Loader2";
import { CountryInfoInd } from "./CountryInfoInd";

export const CountryInfo = () => {
  const params = useParams();
  // console.log(params);
  const [isPending, startTransition] = useTransition();
  const [countryInd, setCountryInd] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      // console.log(res);
      if (res.status === 200) {
        setCountryInd(res.data);
      }
    });
  }, []);

  if (isPending) return <Loader2 />;
  return (
    <>
      <section className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {countryInd.map((curElem, index) => {
            {/* console.log(curElem); */}
            return <CountryInfoInd countrySingle={curElem} key={index} />;
          })}
        </ul>
      </section>
    </>
  );
};
