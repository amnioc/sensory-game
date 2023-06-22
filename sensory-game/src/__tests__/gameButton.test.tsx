import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import GameButton from "../components/game-button/gameButton";
import Header from "../features/header/Header";
import SoundMode from "../features/soundMode/SoundMode";
import DarkMode from "../features/darkMode/DarkMode";

describe("Header", () => {
  it("should render Chill Clicks title", () => {
    render(<Header isDarkMode={false} />);
    const titleElement = screen.getByText(/Chill Clicks/);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Game Button", () => {
  render(
    <GameButton
      isMuted={false}
      isDarkMode={false}
      setBgColourIndex={() => {
        return 2;
      }}
      bgColourIndex={1}
    />
  );
  const testButton = screen.getByRole("button", { name: /game play/ });

  it("should render a button with Game Play class name", () => {
    expect(testButton).toBeTruthy();
  });

  describe("SoundMode Button", () => {
    render(
      <SoundMode
        isMuted={false}
        isDarkMode={false}
        setIsMuted={() => {
          return false;
        }}
      />
    );
    const soundButton = screen.getByRole("button", { name: /change sound/ });

    it("should render a change-sound role button", () => {
      expect(soundButton).toBeTruthy();
    });
    it("should read 'on' when sound is NOT muted/sound is ON", () => {
      expect(soundButton).toHaveTextContent("on");
    });
  });

  describe("DarkMode Button", () => {
    render(
      <DarkMode
        isDarkMode={false}
        setIsDarkMode={() => {
          return false;
        }}
      />
    );
  });
});
