import { Skeleton } from "@/components/ui/skeleton";

const DetailsSkeleton = () => {
  return (
    <div className="w-[1440px] flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <Skeleton className="w-[211px] h-[40px]" />
          <Skeleton className="w-[237px] h-[28px]" />
        </div>
        <div>
          <p className="text-xs font-medium">Rating</p>
          <div className="flex">
            <img src="/star.svg" alt="star" />
            <div>
              <p className="text-lg font-semibold">
                6.9{" "}
                <span className="text-base font-normal text-[#71717A]">
                  /10
                </span>
              </p>
              <p className="text-[#71717] text-base font-normal">37k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 h-[428px]">
        <img src="/first.jpg" alt="small" className="w-[290px] rounded-sm" />
        <img src="/Feature.jpg" alt="big pic" className="w-full rounded-sm" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <Badge genre="genre" />
          <Badge genre="genre" />
          <Badge genre="genre" />
          <Badge genre="genre" />
          <Badge genre="genre" />
        </div>
        <div className="text-base font-normal text-[#09090B]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </div>
        <div className="flex flex-col gap-5">
          <MovieStaffInfo />
          <MovieStaffInfo />
          <MovieStaffInfo />
        </div>
      </div>
      <div className="flex gap-8">
        <MovieCard image="./first.jpg" rating={2} title="movie" />
        <MovieCard image="./first.jpg" rating={2} title="movie" />
        <MovieCard image="./first.jpg" rating={2} title="movie" />
        <MovieCard image="./first.jpg" rating={2} title="movie" />
        <MovieCard image="./first.jpg" rating={2} title="movie" />
      </div>
    </div>
  );
};

export default DetailsSkeleton;
