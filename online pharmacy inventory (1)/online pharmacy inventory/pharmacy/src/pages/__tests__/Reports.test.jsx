import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Reports from "../reports/Reports";

describe("Reports", () => {
  it("renders the reports heading", () => {
    render(<Reports />);
    expect(screen.getByText(/Sales Reports/)).toBeInTheDocument();
  });

  it("displays today's sales", () => {
    render(<Reports />);
    expect(screen.getByText(/Today's Sales: ₹5400/)).toBeInTheDocument();
  });

  it("displays monthly sales", () => {
    render(<Reports />);
    expect(screen.getByText(/This Month: ₹82000/)).toBeInTheDocument();
  });
});
