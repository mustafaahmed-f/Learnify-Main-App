import AuthSkeleton from "@/_features/Auth/_subComponents/AuthSkeleton";
import { SignIn } from "@clerk/nextjs";

interface LoginPageProps {}

function LoginPage({}: LoginPageProps) {
  return <SignIn fallback={<AuthSkeleton isLogin />} />;
}

export default LoginPage;
