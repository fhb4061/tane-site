import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experiences } from "./Experiences";

describe("Experiences", () => {
  it("renders experience cards with list items for achievements", () => {
    render(<Experiences />);

    expect(screen.getByRole("heading", { name: /experiences/i, level: 2 })).toBeTruthy();
    expect(screen.getByRole("heading", { name: /senior developer/i, level: 3 })).toBeTruthy();
    expect(screen.getAllByRole("list")).toHaveLength(2);
    expect(screen.getByText(/led development of photo sharing feature/i)).toBeTruthy();
  });
});
