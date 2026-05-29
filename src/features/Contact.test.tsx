import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders contact links with the expected destinations", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: /jonathanlopeti@gmail.com/i })).toHaveAttribute("href", "mailto:jonathanlopeti@gmail.com");
    expect(screen.getByRole("link", { name: /linkedin\.com\/in\/tane-lopeti/i })).toHaveAttribute("href", "https://www.linkedin.com/in/tane-lopeti");
    expect(screen.getByRole("link", { name: /github\.com\/fhb4061/i })).toHaveAttribute("href", "https://github.com/fhb4061");
    expect(screen.getByRole("link", { name: /\+61 401 237 175/i })).toHaveAttribute("href", "tel:+61401237175");
  });
});
