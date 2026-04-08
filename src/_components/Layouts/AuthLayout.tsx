import AuthToggle from "@/_features/Auth/_subComponents/AuthToggle";
import ImageDisplay from "@/_features/Auth/_subComponents/ImageDisplay";
import LearnifyLogo from "../general/LearnifyLogo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-full grow">
      <div className="grid min-h-full min-w-full grid-cols-1 grid-rows-1 items-start md:grid-cols-2">
        <ImageDisplay />
        <section className="flex h-full w-full flex-col pb-8 sm:pb-11 md:py-14">
          <div className="bg-primary-900 mb-12 px-3 py-6 sm:mb-8 sm:px-5 md:hidden">
            <LearnifyLogo className="text-2xl font-bold text-white" />
          </div>
          <div className="flex w-full grow flex-col items-center justify-center">
            <AuthToggle />
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;
