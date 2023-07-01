import React from "react";
import styles from "./header.module.css";

export interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const headerStyle = isDarkMode ? styles.headerDM : styles.headerLM;
  return (
    <h1 className={headerStyle} aria-label="game name">
      Chill Clicks
    </h1>
  );
};

export default Header;
