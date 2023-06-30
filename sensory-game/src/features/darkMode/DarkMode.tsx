import React from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "./dark-mode.module.css";

export interface DarkModeProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}
const DarkMode: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  const handleClick = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  const dmButtonStyle = isDarkMode ? styles.dmButtonDM : styles.dmButtonLM;
  return (
    <nav className={dmButtonStyle}>
      Dark Mode?{" "}
      <button
        onClick={handleClick}
        aria-label="toggle dark mode"
        className={styles.dmButton}
      >
        {isDarkMode ? <>on</> : <>off</>}
      </button>
    </nav>
  );
};
export default DarkMode;
