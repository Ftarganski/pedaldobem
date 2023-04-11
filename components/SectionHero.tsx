import React from "react";
import { useEffect, useState } from "react";
import HeadSite from "./hero/head";
import Hero from "./hero/hero";

const SectionHero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <HeadSite />
      <Hero />
    </>
  );
};

export default SectionHero;
