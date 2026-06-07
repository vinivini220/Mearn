import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import Layout from "../Layout";
import { renderWithProviders } from "../../test/renderWithProviders";

vi.mock("../Sidebar", () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));

describe("Layout", () => {
  it("renders the Navbar", () => {
    renderWithProviders(<Layout />);
    expect(screen.getByText(/Pharmacy/)).toBeInTheDocument();
  });

  it("renders the Sidebar", () => {
    renderWithProviders(<Layout />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
