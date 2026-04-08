import AuthSkeleton from "@/_features/Auth/_subComponents/AuthSkeleton";
import { SignIn } from "@clerk/nextjs";

async function LoginPage() {
  //* For redirect after sign in , we just use redirect_url as a search param with the redirection path
  //* And this is handled by clerk
  return <SignIn fallback={<AuthSkeleton isLogin />} />;
}

export default LoginPage;
