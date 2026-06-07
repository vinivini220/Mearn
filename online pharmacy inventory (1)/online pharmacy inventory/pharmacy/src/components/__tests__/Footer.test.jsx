import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the pharmacy heading", () => {
    render(<Footer />);
    const headings = screen.getAllByText(/Pharmacy Inventory Management/);
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it("displays the address", () => {
    render(<Footer />);
    expect(screen.getByText(/Nagercoil, Tamil Nadu/)).toBeInTheDocument();
  });

  it("displays the phone number", () => {
    render(<Footer />);
    expect(screen.getByText(/9876543210/)).toBeInTheDocument();
  });

  it("displays the email", () => {
    render(<Footer />);
    expect(screen.getByText(/pharmacy@gmail.com/)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByText(/Website/)).toBeInTheDocument();
    expect(screen.getByText(/Facebook/)).toBeInTheDocument();
    expect(screen.getByText(/Instagram/)).toBeInTheDocument();
  });

  it("renders the copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Pharmacy Inventory Management System/)).toBeInTheDocument();
  });
});
