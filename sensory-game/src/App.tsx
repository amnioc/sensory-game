// import { useState } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import GameButton from "./components/game-button/gameButton";
import DarkMode from "./features/darkMode/DarkMode";
import Header from "./features/header/Header";
import SoundMode from "./features/soundMode/SoundMode";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [bgColour, setBgColour] = useState<string>("linen");

  return (
    <>
      <section className={styles.settings}>
        <DarkMode setIsDarkMode={setIsDarkMode} />
        <SoundMode isMuted={isMuted} setIsMuted={setIsMuted} />
      </section>
      <main className={styles.game_body}>
        <section className={styles.game_top_row}>
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
        </section>
        <Header />
        <section className={styles.game_bottom_row}>
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
          <GameButton isMuted={isMuted} isDarkMode={isDarkMode} />
        </section>
      </main>
    </>
  );
}

export default App;
