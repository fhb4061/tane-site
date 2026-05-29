import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders a level 1 heading by default", () => {
    render(<Heading>Title</Heading>);

    expect(screen.getByRole("heading", { name: "Title", level: 1 })).toBeTruthy();
  });

  it("renders a level 3 heading when requested", () => {
    render(<Heading level={3}>Card title</Heading>);

    expect(screen.getByRole("heading", { name: "Card title", level: 3 })).toBeTruthy();
  });
});
