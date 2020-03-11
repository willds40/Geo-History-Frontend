import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders button that reads click me', () => {
  const {queryByText} = render(<App />);
  expect(queryByText("Click Me")).not.toBeNull();
});

test('renders empty div on load', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("user-info")).toHaveTextContent("")
});

test('renders user info text when button is clicked', () => {
  const {queryByText,getByTestId} = render(<App />);
  const button = queryByText("Click Me")
  button.click()
  expect(getByTestId("user-info")).toHaveTextContent("User Info");
});


