import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../auth/Home";

describe("Home", () => {
  it("renders the page heading", () => {
    render(<Home />);
    expect(screen.getByText(/Pharmacy Inventory Management System/)).toBeInTheDocument();
  });

  it("renders the welcome section", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to Our Pharmacy/)).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(<Home />);
    expect(screen.getByText("View Medicines")).toBeInTheDocument();
    expect(screen.getByText("Search Medicine")).toBeInTheDocument();
    expect(screen.getByText("Order Medicine")).toBeInTheDocument();
  });

  it("renders popular medicines section", () => {
    render(<Home />);
    expect(screen.getByText("Popular Medicines")).toBeInTheDocument();
  });

  it("renders all medicine items", () => {
    render(<Home />);
    expect(screen.getByText("Paracetamol")).toBeInTheDocument();
    expect(screen.getByText("Amoxicillin")).toBeInTheDocument();
    expect(screen.getByText("Vitamin C")).toBeInTheDocument();
    expect(screen.getByText("Cetirizine")).toBeInTheDocument();
  });

  it("renders medicine prices", () => {
    render(<Home />);
    expect(screen.getByText("₹20")).toBeInTheDocument();
    expect(screen.getByText("₹45")).toBeInTheDocument();
    expect(screen.getByText("₹30")).toBeInTheDocument();
    expect(screen.getByText("₹25")).toBeInTheDocument();
  });

  it("renders medicine descriptions", () => {
    render(<Home />);
    expect(screen.getByText("Fever & Pain Relief")).toBeInTheDocument();
    expect(screen.getByText("Antibiotic Medicine")).toBeInTheDocument();
    expect(screen.getByText("Immunity Booster")).toBeInTheDocument();
    expect(screen.getByText("Allergy Relief")).toBeInTheDocument();
  });
});
