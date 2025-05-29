import Badge from "./Badge";

const Dropdown = () => {
  const genreData = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "Historyr",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div className="bg-white w-[577px] p-5 flex flex-col rounded-lg border border-[#E4E4E7] absolute z-10 right-1/2 ">
      <p className="text-[#09090B] text-2xl font-semibold leading-8">Genres</p>
      <p className="text-[#09090B] text-base">See lists of movies by genre</p>
      <div className="border-b border-[#E4E4E7] pt-4"></div>
      <div className="pt-4 flex gap-4 flex-wrap">
        {genreData.map((genre) => (
          <Badge genre={genre} key={genre} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
