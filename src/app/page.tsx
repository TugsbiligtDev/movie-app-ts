import MovieHero from "./components/movie/MovieHero";
import MoviePopular from "./components/movie/MoviePopular";
import MovieSeparation from "./components/movie/MovieSeparation";
import MovieTop from "./components/movie/MovieTop";
import MovieUpcoming from "./components/movie/MovieUpcomming";
import MovieDetails from "./components/movie/MovieDetails";
import HeroSkeleton from "./components/skeleton/HeroSkeleton";
import GridSkeleton from "./components/skeleton/GridSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Dropdown /> */}
      {/* <ListContainer /> */}
      {/* <ListLoading /> */}
      {/* <ListNoResult /> */}
      <main className="pb-12">
        {/* <MovieHero /> */}
        <HeroSkeleton />
        <div className="container mx-auto px-4 py-8">
          {/* <MovieUpcoming text="Upcoming" />
          <MoviePopular text="Popular" />
          <MovieTop text="Top Rated" /> */}
          <GridSkeleton />
          <GridSkeleton />
          <GridSkeleton />
          {/* <MovieDetails /> */}
        </div>
      </main>
    </div>
  );
}
