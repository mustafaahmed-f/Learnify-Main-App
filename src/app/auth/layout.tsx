import AuthLayout from "@/_components/Layouts/AuthLayout";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default Layout;
