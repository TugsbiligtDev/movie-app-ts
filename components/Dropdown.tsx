import React from "react";

const Dropdown = () => {
  return (
    <div className="bg-white w-[577px] p-5 flex flex-col rounded-lg border border-[#E4E4E7] absolute z-10">
      <p className="text-[#09090B] text-2xl font-semibold leading-8">Genres</p>
      <p className="text-[#09090B] text-base">See lists of movies by genre</p>
      <div className="border-b border-[#E4E4E7] pt-4"></div>
      <div className="pt-4"></div>
    </div>
  );
};

export default Dropdown;
