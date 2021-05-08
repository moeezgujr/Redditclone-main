import { render, screen } from '@testing-library/react';
import Post from '../views/Post';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<Post />);
});
