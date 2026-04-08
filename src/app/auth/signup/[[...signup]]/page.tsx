import AuthSkeleton from "@/_features/Auth/_subComponents/AuthSkeleton";
import { SignUp } from "@clerk/nextjs";

async function SignUpPage() {
  return <SignUp fallback={<AuthSkeleton />} />;
}

export default SignUpPage;
