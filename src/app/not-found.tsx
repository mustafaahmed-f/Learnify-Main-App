"use client";

import GeneralLayout from "@/_components/Layouts/GeneralLayout";
import { Button } from "@/_components/ui/button";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <GeneralLayout>
      <div className="mt-4 flex h-full flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-3xl font-semibold">
          This page could not be found :(
        </h1>
        <Button
          type="button"
          variant={"default"}
          onClick={handleGoBack}
          className="text-primary-800 flex cursor-pointer items-center px-6 py-3 text-center text-lg"
        >
          Go Back
        </Button>
      </div>
    </GeneralLayout>
  );
}

export default NotFound;
