// import { useState } from "react";
import "./App.css";
import GameButton from "./components/game-button/gameButton";
import DarkMode from "./features/darkMode/DarkMode";
import Header from "./features/header/Header";
import SoundMode from "./features/soundMode/SoundMode";

function App() {
  return (
    <>
      <DarkMode />
      <SoundMode />
      <GameButton />
      <GameButton />
      <GameButton />
      <Header />

      <GameButton />
      <GameButton />
      <GameButton />
    </>
  );
}

export default App;
