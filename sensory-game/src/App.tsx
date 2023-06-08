// import { useState } from "react";
import styles from "./app.module.css";
import GameButton from "./components/game-button/gameButton";
import DarkMode from "./features/darkMode/DarkMode";
import Header from "./features/header/Header";
import SoundMode from "./features/soundMode/SoundMode";

function App() {
  return (
    <>
      <section className={styles.settings}>
        <DarkMode />
        <SoundMode />
      </section>
      <main className={styles.game_body}>
        <section className={styles.game_top_row}>
          <GameButton />
          <GameButton />
          <GameButton />
        </section>
        <Header />
        <section className={styles.game_bottom_row}>
          <GameButton />
          <GameButton />
          <GameButton />
        </section>
      </main>
    </>
  );
}

export default App;
