'use client';

import { getTrendingMovies, IMAGE_URL } from "@/lib/api-call";
import { useEffect, useState } from "react";

type Movie = {
    id:number;
    title:string;
    overview:string;
    backdrop_path:string;
    original_language: string;
};

export default function HeroBanner(){
    const [movie, setMovie] = useState<Movie | null>(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchMovie = async () =>{
        try {
            const data = await getTrendingMovies()
            setMovie(data.results[0])
        } catch (error) {
            setError("Failed to Load");
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchMovie()
    },[])
    if(loading){
        return <div>Loading banner ...</div>
    }
    if(error || !movie){
        return <div>{error}</div>
    }

    return(
        <div className="relative h-[300px] rounded-2xl overflow-hidden mb-2" style={{backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`, backgroundSize:"cover", backgroundPosition:"center"}}>

            <div className="relative z-10 h-full flex flex-col p-8 max-w-xl">
                <h1 className="text-5xl font-bold mb-3">{movie.title}</h1>
                <p className="text-gray-300 text-sm mb-4 w-100">{movie.overview}</p>
                <p className="text-sm text-gray-300 uppercase mb-2">Language: {movie.original_language}</p>
                <button className="w-fit cursor-pointer px-6 py-2 mt-10 bg-red-600 hover:bg-red-700 rounded-[15px] text-2xl font-semibold">Watch</button>
            </div>
        </div>
    )
}