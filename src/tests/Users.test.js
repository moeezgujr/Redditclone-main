import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import UserRecord from '../views/UserRecord';

test('renders learn react link', () => {
  render(<UserRecord />);
});
