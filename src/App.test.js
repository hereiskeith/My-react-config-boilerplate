/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from "@testing-library/react";
import Welcome from "./App";



it("Should render a text", () => {
  const { getByTestId } = render(<Welcome />);
  expect(getByTestId('header')).toHaveTextContent("Hello World from React boilerplate")
});