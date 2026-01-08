const Auth = process.env.NEXT_PUBLIC_AUTH
const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${Auth}`
}

export async function getTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/week`, {
        method: 'GET',
        headers,
    })

    if (!response.ok) {
        throw new Error("Failed to fetch trending movies");
    }
    return response.json();

}

export const IMAGE_URL = "https://image.tmdb.org/t/p/original"


export async function getPopularMovies() {

    const response = await fetch(`${BASE_URL}/movie/popular`, {
        method: 'GET',
        headers,
    })

    if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
    }
    return response.json();

}


export async function searchMovies(query:string) {


    if(!query) return {results: []}

    const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}`
    , {
        method: 'GET',
        headers,
    })

    if (!response.ok) {
        throw new Error("Failed to seacrh movies");
    }
    return response.json();

}