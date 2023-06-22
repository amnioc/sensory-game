import React, { Dispatch, SetStateAction } from "react";
import styles from "./sound-mode.module.css";
import click from "../../assets/click.mp3";

export interface SoundModeProps {
  isMuted: boolean;
  isDarkMode: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const SoundMode: React.FC<SoundModeProps> = ({
  isMuted,
  isDarkMode,
  setIsMuted,
}) => {
  const audio = new Audio(click);

  const handleClick = () => {
    isMuted ? setIsMuted(false) : setIsMuted(true);
    isMuted ? audio.play() : audio.muted;
  };

  const smButtonStyle = isDarkMode ? styles.smButtonDM : styles.smButtonLM;
  return (
    <nav className={smButtonStyle}>
      Sound?
      <button
        onClick={handleClick}
        aria-label="toggle sound"
        className={styles.smButton}
      >
        {isMuted ? <>off</> : <>on</>}
      </button>
    </nav>
  );
};

export default SoundMode;

//label
//toggle
