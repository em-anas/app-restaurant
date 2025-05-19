import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import apiService from "../services/api";
import type { MenuItem } from "./types";

export const selectedCategoryAtom = atom<
  "Breakfast" | "Canadian" | "Seafood" | "Dessert" | (string & {})
>("Breakfast");

export const searchQueryAtom = atom<string>("");
export const isLoadingAtom = atom<boolean>(false);
export const showFavoritesAtom = atom<boolean>(false);

export const menuItemsAtom = atom<MenuItem[]>([]);

export const favoritesAtom = atomWithStorage<MenuItem[]>("favorites", []);

export const fetchMenuItemsAtom = atom(
  null,
  async (get, set, category: string | null = null) => {
    const categoryToFetch = category || get(selectedCategoryAtom);

    try {
      set(isLoadingAtom, true);
      const data = await apiService.getMenuByCategory(categoryToFetch);
      set(menuItemsAtom, data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      set(menuItemsAtom, []);
    } finally {
      set(isLoadingAtom, false);
    }
  }
);

export const searchMenuItemsAtom = atom(
  null,
  async (get, set, query: string = "") => {
    const searchTerm = query || get(searchQueryAtom);
    const category = get(selectedCategoryAtom);

    if (!searchTerm) {
      set(fetchMenuItemsAtom, category);
      return;
    }

    try {
      set(isLoadingAtom, true);
      const data = await apiService.searchMenuItems(searchTerm, category);
      set(menuItemsAtom, data);
    } catch (error) {
      console.error("Error searching menu items:", error);
      set(menuItemsAtom, []);
    } finally {
      set(isLoadingAtom, false);
    }
  }
);

export const hasFavoritesAtom = atom((get) => {
  return get(favoritesAtom).length > 0;
});
