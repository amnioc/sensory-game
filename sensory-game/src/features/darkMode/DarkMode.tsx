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
  return (
    <label>
      Dark Mode Toggle:{" "}
      <button onClick={handleClick}>{isDarkMode ? <>on</> : <>off</>}</button>
    </label>
  );
};
export default DarkMode;
