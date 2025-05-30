import { Skeleton } from "@/components/ui/skeleton";
const HeroSkeleton = () => {
  return (
    <div className="w-full h-[600px]">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default HeroSkeleton;
