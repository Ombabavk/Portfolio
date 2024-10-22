import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.useFakeTimers();

test.skip("renders loading screen initially", () => {
  render(<App />);
  expect(screen.getByTestId("loading-screen")).toBeInTheDocument();
});

test.skip("renders main content after loading", () => {
  render(<App />);
  jest.advanceTimersByTime(2000);
  expect(screen.getByTestId("main-content")).toBeInTheDocument();
});
