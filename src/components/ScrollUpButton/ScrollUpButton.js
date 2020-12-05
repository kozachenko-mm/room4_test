import React, { useEffect, useState } from "react";
import styles from "./ScrollUpButton.module.css";
import { ReactComponent as ArrowUp } from "../../images/arrow_circle_up-white-48dp.svg";
import { goUp } from "../../services/goUp";

const ScrollUpButton = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    goUp()
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.App}>
      <button className={scroll < 200 ? "" : styles.show} onClick={handleUpButton}>
        <ArrowUp fill="#4a32ff" />
      </button>
    </div>
  );
};

export default ScrollUpButton;