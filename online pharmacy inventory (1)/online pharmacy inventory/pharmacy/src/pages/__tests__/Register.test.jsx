import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Register from "../auth/Register";

describe("Register", () => {
  it("renders the Register Page heading", () => {
    render(<Register />);
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });
});
