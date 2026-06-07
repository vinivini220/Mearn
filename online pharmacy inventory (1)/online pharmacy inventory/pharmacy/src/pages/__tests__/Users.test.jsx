import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Users from "../users/Users";

describe("Users", () => {
  it("renders the users heading", () => {
    render(<Users />);
    expect(screen.getByText(/Users/)).toBeInTheDocument();
  });

  it("displays Admin role", () => {
    render(<Users />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });

  it("displays Pharmacist role", () => {
    render(<Users />);
    expect(screen.getByText("Pharmacist")).toBeInTheDocument();
  });

  it("displays Staff role", () => {
    render(<Users />);
    expect(screen.getByText("Staff")).toBeInTheDocument();
  });
});
