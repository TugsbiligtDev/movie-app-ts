import React from "react";

const ListLoading = () => {
  return (
    <div className="bg-white w-[577px] h-[128px] px-5 pt-6 pb-4 flex justify-center items-center border border-blue-400 absolute z-10">
      <div className="border-t-2 border-x-2 animate-spin rounded-full border-[#E4E4E7] w-[37px] h-[37px]"></div>
    </div>
  );
};

export default ListLoading;
