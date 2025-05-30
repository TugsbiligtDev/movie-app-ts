import CardSkeleton from "./CardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
const GridSkeleton = () => {
  return (
    <div>
      <div className="w-full mb-2">
        <div className="flex justify-between pb-2">
          <Skeleton className="w-[250px] h-[32px] rounded-full" />
          <Skeleton className="w-[165px] h-[36px] rounded-full" />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default GridSkeleton;
