import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../App";

//testing each Element is rendered

afterEach(cleanup);

describe("Components Render", () => {
  it("should render Chill Clicks title", () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Chill Clicks/);
    expect(titleElement).toBeInTheDocument();
  });
  it("should render 6 Game Play buttons", () => {
    const { getAllByRole } = render(<App />);
    const gameButtons = getAllByRole("button", { name: "game play" });
    expect(gameButtons).toHaveLength(6);
    gameButtons.forEach((button) => expect(button).toBeInTheDocument());
  });
  it('should render a button to toggle Sound, that defaults to "on"', () => {
    const { getByRole } = render(<App />);
    const soundButton = getByRole("button", {
      name: /toggle sound/,
    });
    expect(soundButton).toBeInTheDocument();
    expect(soundButton).toHaveTextContent("on");
  });
  it('should render a button to toggle Dark Mode, that defaults to "off"', () => {
    const { getByRole } = render(<App />);
    const darkModeButton = getByRole("button", {
      name: /toggle dark mode/,
    });
    expect(darkModeButton).toBeInTheDocument();
    expect(darkModeButton).toHaveTextContent("off");
  });
});
