import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  it("renders a list of timeline items", () => {
    render(
      <Timeline
        items={[
          { title: "Senior Developer", subtitle: "New Zealand Police", details: ["Led delivery", "Improved CI"] },
          { title: "Developer", subtitle: "Bank of New Zealand", details: ["Built workflows"] },
        ]}
      />
    );

    expect(screen.getByText("Senior Developer")).toBeTruthy();
    expect(screen.getByText("Developer")).toBeTruthy();
    expect(screen.getByText("New Zealand Police")).toBeTruthy();
    expect(screen.getByText("Built workflows")).toBeTruthy();
  });
});
