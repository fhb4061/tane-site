import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppLink } from "./AppLink";

describe("AppLink", () => {
  it("renders an external link with the expected attributes", () => {
    render(<AppLink href="https://example.com" external>Example</AppLink>);

    const link = screen.getByRole("link", { name: /example/i });

    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
