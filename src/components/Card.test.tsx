import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card";

describe("Card", () => {
  it("renders a titled card as a semantic region", () => {
    render(
      <Card id="education">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>
            <p>Auckland University of Technology</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Bachelor of Computer and Information Science</p>
        </CardContent>
      </Card>
    );

    expect(screen.getByRole("region", { name: /education/i })).toBeTruthy();
    expect(screen.getByRole("heading", { name: /education/i, level: 3 })).toBeTruthy();
  });

  it("can expose an accessible label", () => {
    render(
      <Card ariaLabel="Education">
        <CardTitle>Education</CardTitle>
      </Card>
    );

    expect(screen.getByRole("region", { name: /education/i })).toBeTruthy();
  });
});
