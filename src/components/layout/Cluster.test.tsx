import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Cluster } from "./Cluster";

describe("Cluster", () => {
  it("renders children", () => {
    render(
      <Cluster>
        <div>Icon</div>
        <div>Label</div>
      </Cluster>
    );

    expect(screen.getByText("Icon")).toBeTruthy();
    expect(screen.getByText("Label")).toBeTruthy();
  });
});
