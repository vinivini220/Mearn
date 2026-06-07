import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Suppliers from "../suppilers/Suppilers";

describe("Suppliers", () => {
  it("renders the suppliers heading", () => {
    render(<Suppliers />);
    expect(screen.getByRole("heading", { name: /Suppliers/ })).toBeInTheDocument();
  });

  it("displays supplier ABC Pharma", () => {
    render(<Suppliers />);
    expect(screen.getByText("ABC Pharma Pvt Ltd")).toBeInTheDocument();
  });

  it("displays supplier HealthCare", () => {
    render(<Suppliers />);
    expect(screen.getByText("HealthCare Suppliers")).toBeInTheDocument();
  });

  it("displays supplier MedLife", () => {
    render(<Suppliers />);
    expect(screen.getByText("MedLife Distributors")).toBeInTheDocument();
  });
});
