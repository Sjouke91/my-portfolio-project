'use client';
import { login } from '@/app/actions/auth';
import Button from './elements/Button';
import { Container, Form, Input } from '@/styles/globals';
import { Title } from '@/styles/typography';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize router

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget); // Get data directly from the form
      const response = await login(formData);

      if (response?.success) {
        router.push('/admin'); // Correct way to navigate in a client component
      } else if (response?.error) {
        throw new Error(response?.error);
      }
    } catch (err) {
      console.log(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' name='email' placeholder='Email' required />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <Button
          variant='primary'
          size='medium'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </Container>
  );
}
