import { create } from "zustand";
import { ISwapiResponse, BodyRequest } from "./storeTypes";

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

export default {
  swapiResponse,
};
