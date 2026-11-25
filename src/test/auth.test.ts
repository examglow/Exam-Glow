import { describe, expect, it, beforeEach } from "vitest";

// Ensure global localStorage mock for test environment
if (typeof globalThis.localStorage === "undefined") {
  let store: Record<string, string> = {};
  globalThis.localStorage = {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = String(value);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
    get length() {
      return Object.keys(store).length;
    },
  } as unknown as Storage;
}

if (typeof globalThis.window === "undefined") {
  (globalThis as unknown as { window: unknown }).window = globalThis;
}

import { isLoggedIn, markLoggedIn, markLoggedOut } from "@/lib/auth";

describe("Auth logic", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns false when user is not logged in", () => {
    expect(isLoggedIn()).toBe(false);
  });

  it("returns true for valid google auth", () => {
    localStorage.setItem("examglow.auth_method", "google");
    localStorage.setItem("examglow.google_picture", "https://example.com/pic.jpg");
    expect(isLoggedIn()).toBe(true);
  });

  it("returns true for valid email auth", () => {
    localStorage.setItem("examglow.auth_method", "email");
    localStorage.setItem(
      "examglow.profile",
      JSON.stringify({ email: "student@example.com", name: "Student" })
    );
    expect(isLoggedIn()).toBe(true);
  });

  it("returns false if explicitly logged out even with leftover data", () => {
    localStorage.setItem("examglow.auth_method", "google");
    localStorage.setItem("examglow.google_picture", "https://example.com/pic.jpg");
    localStorage.setItem("examglow.logged_out", "true");
    expect(isLoggedIn()).toBe(false);
  });

  it("markLoggedOut clears auth keys and sets logged_out flag", () => {
    localStorage.setItem("examglow.auth_method", "google");
    localStorage.setItem("examglow.google_picture", "https://example.com/pic.jpg");
    localStorage.setItem("examglow.profile", JSON.stringify({ email: "test@example.com" }));

    markLoggedOut();

    expect(localStorage.getItem("examglow.logged_out")).toBe("true");
    expect(localStorage.getItem("examglow.auth_method")).toBeNull();
    expect(localStorage.getItem("examglow.google_picture")).toBeNull();
    expect(localStorage.getItem("examglow.profile")).toBeNull();
    expect(isLoggedIn()).toBe(false);
  });

  it("markLoggedIn removes the logged_out flag", () => {
    localStorage.setItem("examglow.logged_out", "true");
    markLoggedIn();
    expect(localStorage.getItem("examglow.logged_out")).toBeNull();
  });
});
