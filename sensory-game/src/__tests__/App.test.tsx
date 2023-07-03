import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

afterEach(cleanup);

describe("Integration Tests", () => {
  const mockAudio = jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => {
      return Promise.resolve();
    });

  const mockMuteAudio = jest.spyOn(
    window.HTMLMediaElement.prototype,
    "muted",
    "get"
  );

  describe("GameButtons", () => {
    it("should change App background colour on click ", async () => {
      const app = render(<App />);
      const gameButtons = screen.getAllByRole("button", { name: /game play/ });

      expect(app.baseElement).toHaveStyle("background-color: honeydew"); //first bg Colour by default

      userEvent.click(gameButtons[0]); //click event

      await waitFor(
        () => expect(app.baseElement).toHaveStyle("background-color: #BAFDBA") // second colour in array
      );
    });

    it("should play audio on click, when sound is 'on' (default)", async () => {
      const gameButtons = screen.getAllByRole("button", { name: /game play/ });
      userEvent.click(gameButtons[0]); //click event
      await waitFor(() => expect(mockAudio).toHaveBeenCalled());
    });
  });

  describe("Sound Mode Button", () => {
    it('should change button text to "off" on single click', async () => {
      const soundButton = screen.getByRole("button", { name: /toggle sound/ });
      userEvent.click(soundButton);
      await waitFor(() => expect(soundButton).toHaveTextContent("off"));
    });
    it('should play audio when changed from "off" to "on"', async () => {
      const soundButton = screen.getByRole("button", { name: /toggle sound/ });
      userEvent.click(soundButton); // to off
      userEvent.click(soundButton); // back to on
      await waitFor(() => {
        expect(soundButton).toHaveTextContent("on");
        expect(mockAudio).toHaveBeenCalled();
      });
    });
    it('no audio when sound is "off" and Game Button clicked', async () => {
      const soundButton = screen.getByRole("button", { name: /toggle sound/ });
      const gameButtons = screen.getAllByRole("button", { name: /game play/ });
      userEvent.click(soundButton); //sound if off
      userEvent.click(gameButtons[0]); // game button pressed
      await waitFor(() => {
        expect(soundButton).toHaveTextContent("off");
        expect(mockMuteAudio).toHaveBeenCalled(); //muted audio
      });
    });
  });

  describe("Dark Mode Button", () => {
    it('should change button text to "on" when single click', async () => {
      const themeButton = screen.getByRole("button", {
        name: /toggle dark mode/,
      });
      userEvent.click(themeButton);
      await waitFor(() => expect(themeButton).toHaveTextContent("on"));
    });
    it("should change App background colour from honeydew to #7334B0 on click on render", async () => {
      const themeButton = screen.getByRole("button", {
        name: /toggle dark mode/,
      });
      const app = render(<App />);
      expect(app.baseElement).toHaveStyle("background-color: honeydew"); // default light mode first bg colour on render
      userEvent.click(themeButton);
      await waitFor(() =>
        expect(app.baseElement).toHaveStyle("background-color: #7334B0")
      );
    });
    it('when clicked to "on", then Game Button clicked, App background colour changes to second in dark mode array', async () => {
      const themeButton = screen.getByRole("button", {
        name: /toggle dark mode/,
      });
      const gameButtons = screen.getAllByRole("button", { name: /game play/ });
      const app = render(<App />);
      userEvent.click(themeButton); //dark mode on
      await waitFor(() => expect(themeButton).toHaveTextContent("on")); //confirm darkMode on
      userEvent.click(gameButtons[0]); // click a game button

      await waitFor(() =>
        expect(app.baseElement).toHaveStyle("background-color: maroon")
      ); // second dark mode colour
    });
  });
});
