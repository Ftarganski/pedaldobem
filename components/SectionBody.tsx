import React from "react";
import About from "./body/about";
import DoIt from "./body/doit";
import Project from "./body/project";
import Faq from "./body/faq";

const SectionBody = () => {
  return (
    <>
      <Project />
      <About />
      <DoIt />
      <Faq />
    </>
  );
};

export default SectionBody;
