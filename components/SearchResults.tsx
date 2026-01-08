"use client"

import { useEffect, useState } from "react"
import MovieCard from "@/components/MovieCard"
import { searchMovies } from "@/lib/api-call"
type Props = {
    query: string
}
type Movie = {
    id: number;
    title: string;
    poster_path:string;
    vote_average:number;
}


export default function SearchResults({ query }: Props) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!query) return;

        async function fetchResults() {
            setLoading(true);
            setError("");

            try {
                const data = await searchMovies(query);
                setMovies(data.results);
            } catch {
                setError("Failed to search movies");
            } finally {
                setLoading(false);
            }
        }

        fetchResults();
    }, [query]);

    if(!query) return null;

     if (loading) return <p>Searching...</p>;
      if (error) return <p className="text-red-400">{error}</p>;


    return (
        <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for “{query}”
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {movies.length === 0 && (
          <p className="text-gray-400">No results found</p>
        )}

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} cardtype="card2" />
        ))}
      </div>
    </section>
    );
}