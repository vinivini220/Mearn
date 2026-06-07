import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";
import { renderWithProviders } from "../../test/renderWithProviders";

describe("Navbar", () => {
  it("renders the pharmacy logo text", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText(/Pharmacy/)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Medicines")).toBeInTheDocument();
    expect(screen.getByText("AdminLogin")).toBeInTheDocument();
  });

  it("links point to correct routes", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/homepage");
    expect(screen.getByText("About").closest("a")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Medicines").closest("a")).toHaveAttribute("href", "/medicines");
    expect(screen.getByText("AdminLogin").closest("a")).toHaveAttribute("href", "/adminlogin");
  });

  it("changes link color on hover", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);
    const homeLink = screen.getByText("Home");
    await user.hover(homeLink);
    expect(homeLink).toHaveStyle({ color: "#ffd700" });
  });

  it("resets link color on unhover", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);
    const homeLink = screen.getByText("Home");
    await user.hover(homeLink);
    await user.unhover(homeLink);
    expect(homeLink).toHaveStyle({ color: "rgb(255, 255, 255)" });
  });
});
