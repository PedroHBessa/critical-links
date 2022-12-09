import { render, waitForElement } from "@testing-library/react";

import Loading from "../components/loading/Loading";
describe("Tests for the application", () => {
  it("should show main title of the page", async () => {
    const { getByTestId } = render(<Loading />);
    const loading = getByTestId("loading");

    expect(loading).toBeDefined();
  });
});
