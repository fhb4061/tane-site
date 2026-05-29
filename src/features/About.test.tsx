import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

describe("About", () => {
  it("renders the about section content", () => {
    render(<About />);

    expect(screen.getByRole("heading", { name: /about/i, level: 2 })).toBeTruthy();
    expect(screen.getByText(/react typescript/i)).toBeTruthy();
    expect(screen.getByText(/java spring boot/i)).toBeTruthy();
    expect(document.querySelector("section#about")).toBeTruthy();
  });
});
