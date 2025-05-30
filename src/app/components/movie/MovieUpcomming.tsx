"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieUpcoming = ({ text }: { text: string }) => {
  const [movieData, setMovieData] = useState();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setMovieData(data));
    console.log(movieData);
  }, []);

  return (
    <div>
      <div className="w-full mb-2">
        <div className="flex justify-between text-[#09090B] pb-2">
          <p className="text-xl md:text-2xl font-semibold leading-8">{text}</p>
          <div className="flex py-2 px-4 gap-2 items-center cursor-pointer hover:text-indigo-700">
            <p className="text-sm font-medium leading-5">See more</p>
            <img src="arrow-right.svg" alt="arrow icon" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {movieData?.results?.slice(0, 10).map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.original_title}
              rating={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieUpcoming;
