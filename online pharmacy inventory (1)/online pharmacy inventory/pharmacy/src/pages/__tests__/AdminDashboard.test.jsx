import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminDashboard from "../auth/AdminDashboard";
import { renderWithProviders } from "../../test/renderWithProviders";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

describe("AdminDashboard", () => {
  const mockSetIsAdminLoggedIn = vi.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
    mockSetIsAdminLoggedIn.mockClear();
  });

  it("renders the Admin Dashboard title", () => {
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    expect(screen.getByText("Admin Dashboard")).toBeInTheDocument();
  });

  it("renders overview cards", () => {
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    expect(screen.getByText("Total Medicines")).toBeInTheDocument();
    expect(screen.getByText("Low Stock")).toBeInTheDocument();
    expect(screen.getByText("Expired Medicines")).toBeInTheDocument();
    expect(screen.getByText("Daily Sales")).toBeInTheDocument();
  });

  it("renders overview card values", () => {
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("5400")).toBeInTheDocument();
  });

  it("renders module navigation cards", () => {
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    expect(screen.getByText("Medicine Module")).toBeInTheDocument();
    expect(screen.getByText("Supplier")).toBeInTheDocument();
    expect(screen.getByText("Billing")).toBeInTheDocument();
    expect(screen.getByText("Reports")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("navigates to /inventory when Medicine Module clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    await user.click(screen.getByText("Medicine Module"));
    expect(mockNavigate).toHaveBeenCalledWith("/inventory");
  });

  it("navigates to /suppliers when Supplier clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    await user.click(screen.getByText("Supplier"));
    expect(mockNavigate).toHaveBeenCalledWith("/suppliers");
  });

  it("calls setIsAdminLoggedIn(false) and navigates on logout", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminDashboard setIsAdminLoggedIn={mockSetIsAdminLoggedIn} />);
    await user.click(screen.getByText("Logout"));
    expect(mockSetIsAdminLoggedIn).toHaveBeenCalledWith(false);
    expect(mockNavigate).toHaveBeenCalledWith("/homepage");
  });
});
