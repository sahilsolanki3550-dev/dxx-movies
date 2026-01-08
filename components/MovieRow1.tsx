"use client"

import { useEffect, useState } from "react"
import MovieCard from "@/components/MovieCard";
import { getPopularMovies } from "@/lib/api-call";

type Movie = {
    id: number;
    title: string;
    poster_path:string;
    vote_average:number;
}

export default function MovieRow1(){
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); 
    async function loadCards() {
        try {
            const data = await getPopularMovies()
            setMovies(data.results)
        } catch (error) {
            setError("Failed to load movies")
        } finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        loadCards();
    },[])

    if (loading) return <p className="mb-6">Loading...</p>;
    if (error) return <p className="mb-6 text-red-400">{error}</p>;

    return(
        <section className="mb-10">
            <h2 className="text-1xl font-semibold mb-4">Movies</h2>
            <div className="flex gap-4 overflow-auto no-scrollbar pb-2">
                {movies.map((movie)=>(   
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
    )
}