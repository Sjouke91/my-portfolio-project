import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/admin'];

export function middleware(request: NextRequest) {
  let session = request.cookies.get('session');
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session)
    return NextResponse.redirect(new URL('/login', request.url));

  //todo make about the home page, for now hard redirect on /
  if (pathname === '/')
    return NextResponse.redirect(new URL('/about', request.url));

  return NextResponse.next();
}
