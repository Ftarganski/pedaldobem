import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/pdb.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoOrange from "../../public/images/logo_hex_orange.svg";
import LogoBlue from "../../public/images/logo_hex_blue.svg"


const Navbar = () => {
  const { t } = useTranslation("common");
  //SCROLL FUNCTION
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

  const LogoHex = scrolled ? LogoOrange : LogoBlue;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <ul>
          <li>
            <a href="#hero">
            <LogoHex className={styles.nav_logo} alt="Logo Pedal do Bem"/>
            </a>
          </li>
          <li>
            <a href="#project">
              <p className={`${styles.nav_button} ${scrolled ? styles.scrolled : ""}`}>{t("project")}</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p className={`${styles.nav_button} ${scrolled ? styles.scrolled : ""}`}>{t("about")}</p>
            </a>
          </li>
          <li>
            <a href="#doit">
              <p className={`${styles.nav_button} ${scrolled ? styles.scrolled : ""}`}>{t("doit")}</p>
            </a>
          </li>
          <li>
            <a href="#faq">
              <p className={`${styles.nav_button} ${scrolled ? styles.scrolled : ""}`}>{t("faq")}</p>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/opedaldobem/" target="blank">
              <p className={`${styles.nav_button} ${scrolled ? styles.scrolled : ""}`}><InstagramIcon/></p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
