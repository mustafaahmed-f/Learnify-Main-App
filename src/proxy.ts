import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//todo: add here the protected routes inside array
const isProtectedRoute = createRouteMatcher([]);

const isNonAuthRoute = createRouteMatcher(["/auth(.*)", "/auth(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  if ((await auth()).isAuthenticated && isNonAuthRoute(req)) {
    console.log("Here");
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
