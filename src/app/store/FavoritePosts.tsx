import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritePostsState = {
  favoritePostsIds: string[];
  addFavoritePost: (id: string) => void;
  removeFavoritePost: (id: string) => void;
};

export const useFavoritePostsStore = create(
  persist<FavoritePostsState>(
    (set) => ({
      favoritePostsIds: [],
      addFavoritePost: (id: string) =>
        set((state) => ({
          favoritePostsIds: [...state.favoritePostsIds, id],
        })),
      removeFavoritePost: (id: string) =>
        set((state) => ({
          favoritePostsIds: state.favoritePostsIds.filter(
            (favoriteId) => favoriteId !== id
          ),
        })),
    }),
    { name: "favorite-post" }
  )
);
