import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from '@/app/login/page'; // Adjust the import path if needed
import { useRouter } from 'next/navigation';
import { login } from '@/app/actions/auth';

// Mock the router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock the login function
jest.mock('@/app/actions/auth', () => ({
  login: jest.fn(),
}));

describe('Login Page', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form correctly', () => {
    render(<Page />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('submits form and logs in successfully', async () => {
    (login as jest.Mock).mockResolvedValue({ success: true });

    render(<Page />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => expect(login).toHaveBeenCalledTimes(1));
    expect(mockPush).toHaveBeenCalledWith('/admin');
  });

  test('displays an error message on login failure', async () => {
    (login as jest.Mock).mockResolvedValue({ error: 'Invalid credentials' });

    render(<Page />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() =>
      expect(
        screen.getByText('Something went wrong. Please try again.')
      ).toBeInTheDocument()
    );
  });

  test('disables login button when loading', async () => {
    (login as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ success: true }), 1000)
        )
    );

    render(<Page />);

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(
      screen.getByRole('button', { name: 'Logging in...' })
    ).toBeDisabled();
  });
});
