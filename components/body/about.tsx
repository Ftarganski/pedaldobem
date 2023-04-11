import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="about" className={`${styles.about} ${styles.fullHeigth}`}>

      </section>    
    </>
  );
};

export default About;
