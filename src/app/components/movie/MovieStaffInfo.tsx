import { Separator } from "@/components/ui/separator";

const MovieStaffInfo = () => {
  return (
    <div className="w-full">
      <div className="flex text-[#09090B] gap-[53px] text-base pb-1 ">
        <h3 className="font-bold">Director</h3>
        <p className="font-normal">
          Winnie Holzman · Dana Fox · Gregory Maguire
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default MovieStaffInfo;
