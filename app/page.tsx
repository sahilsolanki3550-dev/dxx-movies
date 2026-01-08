"use client"

import HeroBanner from "@/components/HeroBanner";
import MovieCard from "@/components/MovieCard";
import MovieRow1 from "@/components/MovieRow1";
import MovieRow2 from "@/components/MovieRow2";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";
import Wishlist from "@/components/Wishlist";


export default function Home() {
    const [search, setSearch] = useState("");
  const [view, setView] = useState<"home" | "wishlist">("home");

  return (
    <>
      <Sidebar setView={setView} />
      <main className="flex-1 bg-[#0F0F0F] p-6 overflow-y-auto">
        <TopBar search={search} setSearch={setSearch} />

        {view === "wishlist" ? (
          <Wishlist />
        ) : search ? (
          <SearchResults query={search} />
        ) : (
          <>
            <HeroBanner />
            <MovieRow1 />
            <MovieRow2 />
          </>
        )}
      </main>
    </>
  );
}
