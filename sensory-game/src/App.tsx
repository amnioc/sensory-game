import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import GameButton from "./components/game-button/gameButton";
import DarkMode from "./features/darkMode/DarkMode";
import Header from "./features/header/Header";
import SoundMode from "./features/soundMode/SoundMode";
import { colorArrayLight } from "./assets/bgColours";
import { colorArrayDark } from "./assets/bgColours";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [bgColourIndex, setBgColourIndex] = useState<number>(0);

  console.log(isDarkMode, colorArrayLight, colorArrayDark);
  useEffect(() => {
    isDarkMode
      ? (document.body.style.backgroundColor = colorArrayDark[bgColourIndex])
      : (document.body.style.backgroundColor = colorArrayLight[bgColourIndex]);
  }, [bgColourIndex, isDarkMode]);

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
              <GameButton
                isMuted={isMuted}
                isDarkMode={isDarkMode}
                setBgColourIndex={setBgColourIndex}
                bgColourIndex={bgColourIndex}
                key={i}
              />
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
                setBgColourIndex={setBgColourIndex}
                bgColourIndex={bgColourIndex}
                key={i + 3}
              />
            ))}
        </section>
      </main>
    </>
  );
}

export default App;
