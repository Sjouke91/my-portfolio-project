'use server';
import { SignJWT, jwtVerify, errors } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.JWT_SECRET || 'fallbackSecret';
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
  // Verify credentials and get the user (replace this with actual logic)
  const user = { email: formData.get('email'), name: 'John Doe' };

  /* 
  hardcoded check on specific email.
  */

  // Create the session with a 10-minute expiration
  const expires = new Date(Date.now() + 10 * 60 * 1000);
  const session = await encrypt({ user, expires: expires.toISOString() });

  // Set the session cookie
  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
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

// Update the session to extend its expiration time
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return NextResponse.next();

  const parsed = await decrypt(session);
  if (!parsed) return NextResponse.next();

  // Refresh session expiration
  parsed.expires = new Date(Date.now() + 10 * 60 * 1000).toISOString();
  const newSession = await encrypt(parsed);

  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: newSession,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(parsed.expires),
  });

  return res;
}
