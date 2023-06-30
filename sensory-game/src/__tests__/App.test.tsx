// gameButton //should play sound on click

import { render } from "@testing-library/react";
import App from "../App";
import { Simulate } from "react-dom/test-utils";

describe("integration testing gamebutton", () => {
  test("clicking gameButton changes background colour", async () => {
    const { getByRole } = render(<App />);
    //click gameButton
    Simulate.click(getByRole("button", { name: /game play/ }));
  });
});
//nav buttons should change text on click

//user can see app
//user can click game buttons
//can hear sound
//can click mute
//text changes
//click buttons and no sound
//click dark mode
