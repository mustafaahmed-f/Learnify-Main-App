import ImageDisplay from "@/_features/Auth/_subComponents/ImageDisplay";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grow p-3 sm:p-7">
      <div className="grid h-full w-full grid-cols-1 grid-rows-1 items-start md:grid-cols-2">
        <ImageDisplay />
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
