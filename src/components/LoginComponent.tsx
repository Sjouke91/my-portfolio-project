import { redirect } from 'next/navigation';
import { getSession, login, logout } from '@/lib/login';
import Button from './elements/Button';
import { Container, Form, Input } from '@/styles/globals';

export default async function Page() {
  const session = await getSession();
  return (
    <Container>
      <Form
        action={async (formData) => {
          'use server';
          await login(formData);
          redirect('/admin');
        }}
      >
        <Input type='email' placeholder='Email' />
        <Button type='submit'>Login</Button>
      </Form>
    </Container>
  );
}
