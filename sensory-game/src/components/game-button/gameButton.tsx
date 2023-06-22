import styles from "./game-button.module.css";
import click from "../../assets/click.mp3";
import React, { Dispatch, SetStateAction } from "react";
import { colorArrayLight } from "../../assets/bgColours";

export interface GameButtonProps {
  isMuted: boolean;
  isDarkMode: boolean;
  setBgColourIndex: Dispatch<SetStateAction<number>>;
  bgColourIndex: number;
}
const GameButton: React.FC<GameButtonProps> = ({
  isMuted,
  isDarkMode,
  setBgColourIndex,
  bgColourIndex,
}) => {
  const gButtonStyle = isDarkMode ? styles.gameButtonDM : styles.gameButtonLM;
  const audio = new Audio(click);

  const indexSet = () => {
    const newBgIndex = bgColourIndex + 1;
    if (newBgIndex >= colorArrayLight.length) {
      setBgColourIndex(0);
    } else {
      setBgColourIndex(newBgIndex);
    }
  };

  const makeColourAndSound = () => {
    isMuted ? audio.muted : audio.play();
    indexSet();
  };

  return (
    <button
      aria-label="game play"
      className={gButtonStyle}
      onClick={makeColourAndSound}
    ></button>
  );
};

export default GameButton;
