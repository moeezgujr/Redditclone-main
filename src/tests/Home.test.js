import { render, screen } from '@testing-library/react';
import Home from '../views/Home';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<Home />);
});
