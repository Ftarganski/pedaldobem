import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="project" className={`${styles.project} ${styles.fullHeigth}`}>

      </section>    
    </>
  );
};

export default Project;
