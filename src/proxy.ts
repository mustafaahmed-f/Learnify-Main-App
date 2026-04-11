import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { userRoles } from "./_utils/constants/userRoles";

//todo : add authenticated routes
const isProtectedRoute = createRouteMatcher([]);

const isNonAuthRoute = createRouteMatcher(["/auth(.*)", "/auth(.*)"]);

const instructorRoutes = createRouteMatcher(["/coursesDashboard"]);

//todo : add admin routes
const adminRoutes = createRouteMatcher([]);

export default clerkMiddleware(async (auth, req) => {
  const userMetaData = (await auth()).sessionClaims?.userMetadata as {
    role: string;
  };
  const role = userMetaData?.role as (typeof userRoles)[keyof typeof userRoles];

  if (isProtectedRoute(req)) {
    //* add the desired pathname to a search param called redirect_url so user is redirected to it after sign in
    await auth.protect();
  }

  if ((await auth()).isAuthenticated && isNonAuthRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //* Instructor-only route
  if (instructorRoutes(req) && role !== userRoles.instructor) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //* Admin-only route
  if (adminRoutes(req) && role !== userRoles.admin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
