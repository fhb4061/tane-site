import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(
      <Stack>
        <div>One</div>
        <div>Two</div>
      </Stack>
    );

    expect(screen.getByText("One")).toBeTruthy();
    expect(screen.getByText("Two")).toBeTruthy();
  });
});
