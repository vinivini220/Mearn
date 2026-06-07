import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminLogin from "../auth/AdminLogin";
import { renderWithProviders } from "../../test/renderWithProviders";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

describe("AdminLogin", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the Admin Login heading", () => {
    renderWithProviders(<AdminLogin />);
    expect(screen.getByText("Admin Login")).toBeInTheDocument();
  });

  it("renders username and password inputs", () => {
    renderWithProviders(<AdminLogin />);
    expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
  });

  it("renders the Login button", () => {
    renderWithProviders(<AdminLogin />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("allows typing in username field", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminLogin />);
    const input = screen.getByPlaceholderText("Enter Username");
    await user.type(input, "admin");
    expect(input).toHaveValue("admin");
  });

  it("allows typing in password field", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminLogin />);
    const input = screen.getByPlaceholderText("Enter Password");
    await user.type(input, "secret");
    expect(input).toHaveValue("secret");
  });

  it("navigates to /inventory on login click", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AdminLogin />);
    await user.click(screen.getByText("Login"));
    expect(mockNavigate).toHaveBeenCalledWith("/inventory");
  });
});
