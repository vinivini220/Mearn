import { describe, it, expect } from "vitest";
import authReducer, { login, logout } from "../authSlice";

describe("authSlice reducer", () => {
  const initialState = { isLoggedIn: false, user: null };

  it("returns the initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("handles login action", () => {
    const user = { id: 1, name: "admin" };
    const state = authReducer(initialState, login(user));
    expect(state.isLoggedIn).toBe(true);
    expect(state.user).toEqual(user);
  });

  it("handles logout action", () => {
    const loggedInState = { isLoggedIn: true, user: { id: 1 } };
    const state = authReducer(loggedInState, logout());
    expect(state.isLoggedIn).toBe(false);
  });

  it("preserves user as null after logout", () => {
    const loggedInState = { isLoggedIn: true, user: { id: 1 } };
    const state = authReducer(loggedInState, logout());
    expect(state.isLoggedIn).toBe(false);
  });
});
