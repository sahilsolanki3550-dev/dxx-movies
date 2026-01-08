"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

type Movie = {
    id: number;
    title: string;
    poster_path:string;
    vote_average:number;
}

export default function Wishlist() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setMovies(JSON.parse(stored));
    }
  }, []);

  if (movies.length === 0) {
    return (
      <div className="text-gray-400">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">
        Your Wishlist
      </h2>

      <div className="flex gap-4 flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
