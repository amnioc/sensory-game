import React from "react";
import { render } from "@testing-library/react";
import GameButton from "../components/game-button/gameButton";

describe("gameButton", () => {
  it("should render in colour purple", () => {
    render(<GameButton isMuted={false} isDarkMode={false} />);
  });
});
