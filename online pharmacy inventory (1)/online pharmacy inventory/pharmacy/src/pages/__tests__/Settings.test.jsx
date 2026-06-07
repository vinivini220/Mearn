import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Settings from "../settings/Settings";

describe("Settings", () => {
  it("renders the settings heading", () => {
    render(<Settings />);
    expect(screen.getByText(/Settings/)).toBeInTheDocument();
  });

  it("displays Change Password option", () => {
    render(<Settings />);
    expect(screen.getByText("Change Password")).toBeInTheDocument();
  });

  it("displays System Preferences option", () => {
    render(<Settings />);
    expect(screen.getByText("System Preferences")).toBeInTheDocument();
  });

  it("displays Backup Data option", () => {
    render(<Settings />);
    expect(screen.getByText("Backup Data")).toBeInTheDocument();
  });
});
