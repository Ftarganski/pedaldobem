import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="faq" className={`${styles.faq} ${styles.fullHeigth}`}>
      <div className={styles.faq_estructure}>

<div className={styles.faq_content}>
  <h1 className={styles.special_h1}>{t("faq")}</h1>
  </div>

  </div>

      </section>    
    </>
  );
};

export default Faq;
