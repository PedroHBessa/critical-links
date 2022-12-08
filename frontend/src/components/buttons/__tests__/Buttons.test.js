import { render } from "@testing-library/react";

import Button from "../Button";
import ButtonMobile from "../ButtonMobile";
import ButtonsGroup from "../ButtonsGroup";
import { AppThemeProvider, theme } from "../../../theme/AppThemeProvider";
import CancelButton from "../CancelButton";


describe("Tests for the buttons", () => {
  it("should load the main button", async () => {
    const { getByTestId } = render(<Button />);
    const data = getByTestId("button");

    expect(data).toBeDefined();
  });

  it("should load the mobile button", async () => {
    const { getByTestId } = render(<ButtonMobile />);
    const data = getByTestId("btn-mobile");

    expect(data).toBeDefined();
  });

  it("should load group of the buttons", async () => {
    const { getByTestId } = render(
      <AppThemeProvider theme={theme}>
        <ButtonsGroup />
      </AppThemeProvider>
    );
    const data = getByTestId("btns-group");

    expect(data).toBeDefined();
  });
  
});
it("should load cancel button", async () => {
    const { getByTestId } = render(
      <CancelButton />
    );
    const data = getByTestId("cancel-btn");

    expect(data).toBeDefined();
  });
  

