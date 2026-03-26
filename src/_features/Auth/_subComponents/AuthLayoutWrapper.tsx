import ImageDisplay from "./ImageDisplay";

interface AuthLayoutWrapperProps {
  children: React.ReactNode;
}

function AuthLayoutWrapper({ children }: AuthLayoutWrapperProps) {
  return (
    <div className="grow p-3 sm:p-7">
      <div className="grid h-full w-full grid-cols-1 grid-rows-1 items-start md:grid-cols-2">
        <ImageDisplay />
        {children}
      </div>
    </div>
  );
}

export default AuthLayoutWrapper;
