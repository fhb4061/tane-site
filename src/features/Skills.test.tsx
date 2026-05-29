import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders the main skill categories and examples", () => {
    render(<Skills />);

    expect(screen.getByRole("heading", { name: /skills/i, level: 2 })).toBeTruthy();
    expect(screen.getByText("Frontend")).toBeTruthy();
    expect(screen.getByText("Backend")).toBeTruthy();
    expect(screen.getByText("DevOps & Tools")).toBeTruthy();
    expect(screen.getByText("Practices")).toBeTruthy();
    expect(screen.getByText(/spring boot java/i)).toBeTruthy();
  });
});
