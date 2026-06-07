import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Medicines from "../auth/Medicines";

describe("Medicines", () => {
  it("renders the page heading", () => {
    render(<Medicines />);
    expect(screen.getByText(/Medicines/)).toBeInTheDocument();
  });

  it("renders the Tablets category", () => {
    render(<Medicines />);
    expect(screen.getByText("Tablets")).toBeInTheDocument();
  });

  it("renders the Syrups category", () => {
    render(<Medicines />);
    expect(screen.getByText("Syrups")).toBeInTheDocument();
  });

  it("renders the Creams category", () => {
    render(<Medicines />);
    expect(screen.getByText("Creams")).toBeInTheDocument();
  });
});
