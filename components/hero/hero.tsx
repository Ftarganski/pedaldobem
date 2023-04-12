import React from "react";
import styles from "../../styles/pdb.module.css";
import Navbar from "./navbar";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import LogoBlue from "../../public/images/logo_blue.svg";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="hero" className={`${styles.hero} ${styles.fullHeigth}`}>
        <Navbar />
        <div className={styles.hero_content}>
          <LogoBlue alt="Logo" className={styles.hero_logo} />
        </div>

        
      </section>
    </>
  );
};

export default Hero;
