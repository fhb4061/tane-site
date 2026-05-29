import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the correct job title", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /full-stack engineer/i, level: 2 })).toBeTruthy();
  });
});
