import styles from "./game-button.module.css";
//className={styles.Name}
const GameButton = () => {
  return <button aria-label="game play" className={styles.gameButton}></button>;
};

export default GameButton;

// const audio = new Audio("LINK");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });
