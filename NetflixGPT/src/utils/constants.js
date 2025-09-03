export const Bg_IMG =
  "https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1-1800x1013.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const TMDB_Img = "https://image.tmdb.org/t/p/w200/";
