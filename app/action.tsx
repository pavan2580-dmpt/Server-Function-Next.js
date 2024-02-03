"use server";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
export const FetchAnime = async (page: number) => {
  const resp = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await resp.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
