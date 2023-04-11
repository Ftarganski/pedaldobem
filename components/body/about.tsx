import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="about" className={`${styles.about} ${styles.fullHeigth}`}>

      <div className={styles.about_estructure}>

      <div className={styles.about_content}>
        <h1 className={styles.special_h1}>{t("about")}</h1>
        </div>

        </div>

      </section>    
    </>
  );
};

export default About;
