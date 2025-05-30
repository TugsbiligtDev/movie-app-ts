const List = () => {
  return (
    <div className="flex gap-4 p-2">
      <img
        src="/first.jpg"
        alt="list"
        width={67}
        height={100}
        className="rounded-md"
      />
      <div className="w-full">
        <h3 className="text-xl font-semibold leading-7">Wicked</h3>
        <div className="flex">
          <img src="/star.svg" alt="star" width={16} />
          <p>
            6.9
            <span className="text-[#71717A]">/10</span>
          </p>
        </div>
        <div className="flex justify-between items-center pt-3 text-sm font-medium leading-5">
          <p>2024</p>
          <div className="flex py-2 px-4 gap-2">
            <p>See more</p>
            <img src="/arrow-right.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
