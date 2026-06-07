import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../auth/About";

describe("About", () => {
  it("renders the about heading", () => {
    render(<About />);
    expect(screen.getByText(/About Our Pharmacy/)).toBeInTheDocument();
  });

  it("renders the Who We Are section", () => {
    render(<About />);
    expect(screen.getByText("Who We Are")).toBeInTheDocument();
  });

  it("renders the Our Services section", () => {
    render(<About />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("renders the Contact Us section", () => {
    render(<About />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("displays contact details", () => {
    render(<About />);
    expect(screen.getByText(/Nagercoil, Tamil Nadu/)).toBeInTheDocument();
    expect(screen.getByText(/9876543210/)).toBeInTheDocument();
    expect(screen.getByText(/pharmacy@gmail.com/)).toBeInTheDocument();
  });

  it("renders service items", () => {
    render(<About />);
    expect(screen.getByText(/Wide range of medicines/)).toBeInTheDocument();
    expect(screen.getByText(/Easy medicine ordering/)).toBeInTheDocument();
    expect(screen.getByText(/Fast stock management/)).toBeInTheDocument();
    expect(screen.getByText(/Simple billing process/)).toBeInTheDocument();
  });
});
