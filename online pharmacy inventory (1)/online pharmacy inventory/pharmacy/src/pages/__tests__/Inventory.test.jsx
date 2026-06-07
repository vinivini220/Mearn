import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Inventory from "../Inventory/Inventory";

describe("Inventory", () => {
  it("renders the inventory heading", () => {
    render(<Inventory />);
    expect(screen.getByText("Medicine Inventory")).toBeInTheDocument();
  });

  it("renders Paracetamol with stock", () => {
    render(<Inventory />);
    expect(screen.getByText("Paracetamol")).toBeInTheDocument();
    expect(screen.getByText("Stock: 100")).toBeInTheDocument();
  });

  it("renders Vitamin C with stock", () => {
    render(<Inventory />);
    expect(screen.getByText("Vitamin C")).toBeInTheDocument();
    expect(screen.getByText("Stock: 50")).toBeInTheDocument();
  });

  it("renders Amoxicillin with stock", () => {
    render(<Inventory />);
    expect(screen.getByText("Amoxicillin")).toBeInTheDocument();
    expect(screen.getByText("Stock: 70")).toBeInTheDocument();
  });
});
