import React, { useState } from "react";
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
        <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <SoundMode isMuted={isMuted} setIsMuted={setIsMuted} />
      </section>
      <main className={styles.game_body}>
        <section className={styles.game_top_row}>
          {Array(3)
            .fill(true)
            .map((_, i) => (
              <GameButton isMuted={isMuted} isDarkMode={isDarkMode} key={i} />
            ))}
        </section>
        <Header />
        <section className={styles.game_bottom_row}>
          {Array(3)
            .fill(true)
            .map((_, i) => (
              <GameButton
                isMuted={isMuted}
                isDarkMode={isDarkMode}
                key={i + 3}
              />
            ))}
        </section>
      </main>
    </>
  );
}

export default App;
