import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the site header", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeTruthy();
  });
});
