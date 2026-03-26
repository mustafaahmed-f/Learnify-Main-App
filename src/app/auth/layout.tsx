import AuthLayoutWrapper from "@/_features/Auth/_subComponents/AuthLayoutWrapper";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}

export default AuthLayout;
