import styles from "./game-button.module.css";
import bubble from "../../assets/bubble.mp3";

const GameButton = () => {
  const audio = new Audio(bubble);

  const playSound = () => {
    audio.play();
  };

  return (
    <button
      aria-label="game play"
      className={styles.gameButton}
      onClick={playSound}
    ></button>
  );
};

export default GameButton;
