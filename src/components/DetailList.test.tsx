import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DetailList } from "./DetailList";

describe("DetailList", () => {
  it("renders a definition list", () => {
    render(
      <DetailList
        items={[
          { term: "Frontend", description: "React, Tailwind" },
          { term: "Backend", description: "Spring Boot" },
        ]}
      />
    );

    expect(screen.getByText("Frontend")).toBeTruthy();
    expect(screen.getByText("Backend")).toBeTruthy();
    expect(screen.getByText("React, Tailwind")).toBeTruthy();
    expect(screen.getByText("Spring Boot")).toBeTruthy();
  });
});
