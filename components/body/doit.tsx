import React from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const DoIt = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="doit" className={`${styles.doit} ${styles.fullHeigth}`}>

      <div className={styles.doit_estructure}>
          <div className={styles.shape_arrow_top}>
            <svg
              className={styles.shape_arrow_svg}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                className={styles.shape_mainColor}
              ></path>
            </svg>
          </div>

          <div className={styles.doit_content}>
            <h1 className={styles.special_h1}>{t("doit")}</h1>
          </div>

          <div className={styles.shape_arrow_bottom}>
            <svg
              className={styles.shape_arrow_svg}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                className={styles.shape_mainColor}
              ></path>
            </svg>
          </div>
        </div>


      </section>    
    </>
  );
};

export default DoIt;
