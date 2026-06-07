import { describe, it, expect } from "vitest";
import store, { login, logout } from "../store";

describe("Redux store", () => {
  it("has correct initial state", () => {
    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });

  it("sets isLoggedIn to true on login", () => {
    store.dispatch(login());
    expect(store.getState().auth.isLoggedIn).toBe(true);
  });

  it("sets isLoggedIn to false on logout", () => {
    store.dispatch(login());
    store.dispatch(logout());
    expect(store.getState().auth.isLoggedIn).toBe(false);
  });
});
