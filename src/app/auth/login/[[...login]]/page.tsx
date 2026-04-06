import { SignIn } from "@clerk/nextjs";

interface LoginPageProps {}

function LoginPage({}: LoginPageProps) {
  return <SignIn />;
}

export default LoginPage;
