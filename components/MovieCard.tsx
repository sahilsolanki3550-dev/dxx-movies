"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react"
import { IMAGE_URL } from "@/lib/api-call";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

type MovieCardType = "card1" | "card2";

type Props = {
    movie: Movie;
    cardtype?: MovieCardType
}

export default function MovieCard({ movie, cardtype = "card1" }: Props) {

    const [wishlist, setWishlist] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
            const wishlist: Movie[] = JSON.parse(stored);
            setWishlist(wishlist.some((m) => m.id === movie.id))
        }
    }, [movie.id]);

    function toggleWishlist() {
        const stored = localStorage.getItem("wishlist");
        let wishlist: Movie[] = stored ? JSON.parse(stored) : [];

        if (wishlist.some((m) => m.id === movie.id)) {
            wishlist = wishlist.filter((m) => m.id !== movie.id)
            setWishlist(false);
        } else {
            wishlist.push(movie);
            setWishlist(true)
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }

    if (cardtype === "card2") {


        return (
            <div className="w-60 flex-shrink-0 rounded-2xl bg-[#1A1A1A] shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="p-3">
                    <div className="relative h-60 w-full rounded-xl overflow-hidden group">
                        <img
                            src={`${IMAGE_URL}${movie.poster_path}`}
                            alt="movie_image"
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* Wishlist Button */}
                        <button
                            onClick={toggleWishlist}
                            className="absolute cursor-pointer top-2 right-2 bg-black/60 p-1.5 rounded-full hover:bg-black"
                        >
                            <Heart
                                size={16}
                                className={wishlist ? "fill-red-500 text-red-500" : "text-white"}
                            />
                        </button>
                    </div>

                    {/* Title */}
                    <h2 className="mt-2font-semibold text-white truncate">
                        {movie.title}
                    </h2>

                    {/* Rating */}
                    <p className=" text-gray-400">
                        ⭐ Ratings
                    </p>

                </div>
            </div>
        )
    }

    return (
        <div className="relative w-55 flex-shrink-0 rounded-2xl bg-[#1A1A1A] shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="p-3">

                <button
                    onClick={toggleWishlist}
                    className="absolute cursor-pointer top-2 right-2 bg-black/60 p-1 rounded-full hover:bg-black z-10"
                >
                    <Heart
                        size={20}
                        className={wishlist ? "fill-red-500 text-red-500" : "text-white"}
                    />
                </button>

                <div className="flex items-start gap-2">
                    <img
                        src={`${IMAGE_URL}${movie.poster_path}`}
                        alt="movie_image"
                        className="w-[60px] h-[45px] rounded-2xl object-cover"
                    />
                </div>

                <h2 className="mt-2 text-lg font-semibold text-white truncate">
                    {movie.title}
                </h2>

                <p className="text-xs text-gray-400">
                    ⭐ Ratings {movie.vote_average.toFixed()}
                </p>

            </div>
        </div>
    )

}