import { create } from "zustand";
import {
  ISwapiResponse,
  IListFavorites,
  BodyRequest,
  Result,
} from "./storeTypes";

const swapiResponse = create<ISwapiResponse>((set) => ({
  swapiList: {
    requested: false,
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  setSwapiList: (swapiList: BodyRequest) => set({ swapiList }),
}));

const listFavorites = create<IListFavorites>((set) => ({
  favorites: JSON.parse(window.localStorage.getItem("favorites") || "[]"),
  addFavorite: (favorite: Result) =>
    set((state) => {
      const newFavorites = [...state.favorites, favorite];
      window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),
  removeFavorite: (favorite: Result) =>
    set((state) => {
      const newFavorites = state.favorites.filter(
        (f) => f.name !== favorite.name,
      );
      window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    }),
}));

export default {
  swapiResponse,
  listFavorites,
};
