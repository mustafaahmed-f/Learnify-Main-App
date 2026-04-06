import AuthSkeleton from "@/_features/Auth/_subComponents/AuthSkeleton";
import { SignUp } from "@clerk/nextjs";

interface SignUpPageProps {}

function SignUpPage({}: SignUpPageProps) {
  return <SignUp fallback={<AuthSkeleton />} />;
}

export default SignUpPage;
