import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const DoIt = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="doit" className={`${styles.doit} ${styles.fullHeigth}`}>

      </section>    
    </>
  );
};

export default DoIt;
