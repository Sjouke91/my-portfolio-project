'use client';
import { login } from '@/app/actions/auth';
import Button from './elements/Button';
import { Container, Form, Input, TextInput } from '@/styles/globals';
import { Title } from '@/styles/typography';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { updateProject } from '@/app/actions/project';

export default function EditForm({ id }: { id: string }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget); // Get data directly from the form
      const response = await updateProject({ id, formData });
    } catch (err) {
      console.log(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Edit project</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='string' name='projectName' placeholder='Project name' />
        <TextInput name='description' placeholder='Project name' />
        <Button
          variant='primary'
          size='medium'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Editting project...' : 'Edit'}
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </Container>
  );
}
