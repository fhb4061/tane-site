import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionIcon } from "./SectionIcon";

function SampleIcon() {
  return <svg data-testid="sample-icon" />;
}

describe("SectionIcon", () => {
  it("renders a section icon with the shared sizing classes", () => {
    render(<SectionIcon icon={SampleIcon} />);

    expect(screen.getByTestId("sample-icon")).toBeTruthy();
  });
});
