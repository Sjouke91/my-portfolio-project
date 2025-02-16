'use server';
import { SignJWT, jwtVerify, errors } from 'jose';
import { cookies } from 'next/headers';
// import bcrypt from 'bcrypt';

//todo store in env vars
const secretKey = 'JWT-secret';
const key = new TextEncoder().encode(secretKey);

// Utility function to encrypt the payload into a JWT
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10m') // Set to 10 minutes
    .sign(key);
}

// Utility function to decrypt and verify a JWT
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    if (error instanceof errors.JWTExpired) {
      console.error('JWT has expired');
    } else {
      console.error('JWT verification failed:', error);
    }
    return null;
  }
}

// Handle user login and set a session cookie
export async function login(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    /*
    todo: fetch user from database and compare hashed passwords using bcrypt
    // Fetch user from a database
    const user = await getUserByEmail(email);

    if (!user) {
      // Use a generic error message to prevent user enumeration
      return { error: 'Invalid credentials' };
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return { error: 'Invalid credentials' };
    }
    */

    // Create the session with a 10-minute expiration
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    const session = await encrypt({
      email: email,
      expires: expires.toISOString(),
    });

    // Set the session cookie
    const cookieStore = await cookies();
    cookieStore.set('session', session, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred' };
  }
}

// Handle user logout by clearing the session cookie
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

// Retrieve the current session by decrypting the cookie
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  if (!session) return null;

  const parsed = await decrypt(session);
  if (!parsed || new Date(parsed.expires) < new Date()) {
    console.warn('Session has expired or is invalid');
    return null;
  }
  return parsed;
}
