import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//todo: add here the protected routes inside array
const isProtectedRoute = createRouteMatcher([]);

const isNonAuthRoute = createRouteMatcher(["/auth(.*)", "/auth(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    //* add the desired pathname to a search param called redirect_url so user is redirected to it after sign in
    await auth.protect();
  }
  if ((await auth()).isAuthenticated && isNonAuthRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
