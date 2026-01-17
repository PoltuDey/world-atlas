import React from "react";
import { HeroSection } from "./HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Contact/>
    </>
  );
};
