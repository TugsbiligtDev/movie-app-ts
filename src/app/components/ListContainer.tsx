import List from "./List";

const ListContainer = () => {
  return (
    <div className="bg-white p-3 w-[577px] absolute z-10 border border-[#E4E4E7] rounded-md text-[#09090B]">
      <List />
      <List />
      <List />
      <List />
      <List />
      <div className="py-2 px-4 font-semibold text-sm">
        See all results for "Wicked"
      </div>
    </div>
  );
};

export default ListContainer;
