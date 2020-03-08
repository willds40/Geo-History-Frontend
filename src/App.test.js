import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders should find button that reads click me', () => {
  render(<App />);
  expect(document.querySelector("button")).toHaveTextContent("Click Me")
});


