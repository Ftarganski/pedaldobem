import React from "react";
import About from "./body/about";
import DoIt from "./body/doit";
import Project from "./body/project";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <About />
      <Project />
      <DoIt />
    </>
  );
};

export default Body;
