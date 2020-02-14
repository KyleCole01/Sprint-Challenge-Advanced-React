import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

describe("<PlayerCard />", () => {
  it("renders component", () => {
    render(<Container />);
  });
});
