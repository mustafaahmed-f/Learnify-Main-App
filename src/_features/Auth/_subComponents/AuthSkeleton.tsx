import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/_components/ui/card";
import { Skeleton } from "@/_components/ui/skeleton";

interface AuthSkeletonProps {
  isLogin?: boolean;
}

function AuthSkeleton({ isLogin = false }: AuthSkeletonProps) {
  return (
    <div className="w-full max-w-sm px-4">
      <Card className="">
        <CardHeader className="">
          <Skeleton className="bg-primary-50 mx-auto h-4 w-1/2" />
          <Skeleton className="bg-primary-50 mx-auto h-4 w-2/3" />
        </CardHeader>
        <div className="mt-2 mb-4 flex w-full flex-nowrap items-center justify-center gap-3 px-6">
          <Skeleton className="bg-primary-50 h-8 grow" />
          <Skeleton className="bg-primary-50 h-8 grow" />
          <Skeleton className="bg-primary-50 h-8 grow" />
        </div>
        <CardContent>
          <Skeleton
            className={`bg-primary-50 ${isLogin ? "aspect-video" : "h-72"} w-full`}
          />
        </CardContent>
        <Skeleton className="bg-primary-50 mx-auto h-4 w-2/3" />
        <CardFooter className="mt-4 flex flex-col items-center gap-4">
          <Skeleton className="bg-primary-50 mx-auto h-4 w-1/2" />
          <Skeleton className="bg-primary-50 mx-auto h-4 w-1/2" />
        </CardFooter>
      </Card>
    </div>
  );
}

export default AuthSkeleton;
