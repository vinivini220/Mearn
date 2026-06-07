import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Billing from "../billing/Billing";

describe("Billing", () => {
  it("renders the billing heading", () => {
    render(<Billing />);
    expect(screen.getByText(/Billing System/)).toBeInTheDocument();
  });

  it("displays customer name", () => {
    render(<Billing />);
    expect(screen.getByText(/Customer Name: John/)).toBeInTheDocument();
  });

  it("displays medicine name", () => {
    render(<Billing />);
    expect(screen.getByText(/Medicine: Paracetamol/)).toBeInTheDocument();
  });

  it("displays total amount", () => {
    render(<Billing />);
    expect(screen.getByText(/Total: ₹120/)).toBeInTheDocument();
  });
});
