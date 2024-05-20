import { create } from "zustand";
import {
  ISwapiResponse,
  IListFavorites,
  IStatePageSwapi,
  IOpenModalSwapiError,
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

const statePageSwapi = create<IStatePageSwapi>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
}));

const openModalSwapiError = create<IOpenModalSwapiError>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default {
  swapiResponse,
  listFavorites,
  statePageSwapi,
  openModalSwapiError,
};
