import styles from "./game-button.module.css";
import click from "../../assets/click.mp3";
import React from "react";

export interface GameButtonProps {
  isMuted: boolean;
  isDarkMode: boolean;
}
const GameButton: React.FC<GameButtonProps> = ({ isMuted, isDarkMode }) => {
  const audio = new Audio(click);
  const colorArrayLight = [
    "lavender",
    "palegreen",
    "mistyrose",
    "papayawhip",
    "lemonchiffon",
    "aliceblue",
  ];

  const changeBackground = (color: string) => {
    document.body.style.background = color;
  };

  const makeColourAndSound = () => {
    isMuted ? audio.muted : audio.play();
    changeBackground(
      colorArrayLight[Math.floor(Math.random() * colorArrayLight.length)]
    );
  };

  return (
    <button
      aria-label="game play"
      className={styles.gameButton}
      onClick={makeColourAndSound}
    ></button>
  );
};

export default GameButton;
