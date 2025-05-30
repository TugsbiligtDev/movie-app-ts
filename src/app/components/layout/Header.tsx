import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Badge from "../common/Badge";

const Header = () => {
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
    <header className="w-full py-3 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="./film.svg" alt="film icon" />
            <p className="text-indigo-700 text-base font-bold leading-5">
              Movie Z
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            {/* <div className="flex py-2 px-4 gap-2 border border-[#E4E4E7] rounded-md items-center">
              <img src="chevron-down.svg" alt="down icon" />
              <p className="text-[#18181B] text-sm font-medium leading-5">
                Genre
              </p>
            </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Genre</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[577px]">
                <DropdownMenuLabel>Genres</DropdownMenuLabel>
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="pt-4 flex gap-4 flex-wrap">
                  {genreData.map((genre) => (
                    <Badge genre={genre} key={genre} />
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-full md:w-64 lg:w-80 flex items-center px-3 py-2 gap-2.5 border border-[#E4E4E7] rounded-md">
              <img
                src="_magnifying-glass.svg"
                alt="search icon"
                className="w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search.."
                className="text-sm font-normal leading-5 w-full outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-9 h-9 flex items-center justify-center border border-[#E4E4E7] rounded-lg">
              <img src="moon.svg" alt="moon icon" />
            </div>
          </div>
        </div>

        <div className="md:hidden mt-3">
          <div className="flex items-center px-3 py-2 gap-2.5 border border-[#E4E4E7] rounded-md w-full">
            <img
              src="_magnifying-glass.svg"
              alt="search icon"
              className="w-4 h-4"
            />
            <input
              type="text"
              placeholder="Search.."
              className="text-sm font-normal leading-5 w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
