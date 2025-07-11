// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     // return NextResponse.json({ message: 'Hello from the about page' })
//   return NextResponse.redirect(new URL('/', request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    /* if pathname include /about... then redirect it to /about */
    return NextResponse.rewrite(new URL("/about", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    /* if pathname include /about then redirect it to the root page */
    return NextResponse.redirect(new URL("/", request.url));
  }
}
