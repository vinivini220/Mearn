import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import App from "../../App";
import { renderWithProviders } from "../../test/renderWithProviders";

vi.mock("../../components/Sidebar", () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>,
}));

describe("App", () => {
  it("renders the Navbar", () => {
    renderWithProviders(<App />);
    const matches = screen.getAllByText(/Pharmacy/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Footer", () => {
    renderWithProviders(<App />);
    const matches = screen.getAllByText(/Pharmacy Inventory Management/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the home page by default at /", () => {
    renderWithProviders(<App />, { route: "/" });
    expect(screen.getByText("Medicine Inventory")).toBeInTheDocument();
  });

  it("renders the About page at /about", () => {
    renderWithProviders(<App />, { route: "/about" });
    expect(screen.getByText(/About Our Pharmacy/)).toBeInTheDocument();
  });

  it("renders the Register page at /register", () => {
    renderWithProviders(<App />, { route: "/register" });
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });

  it("renders the Inventory page at /Inventory", () => {
    renderWithProviders(<App />, { route: "/Inventory" });
    expect(screen.getByText("Medicine Inventory")).toBeInTheDocument();
  });
});
