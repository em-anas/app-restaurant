import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import {
  selectedCategoryAtom,
  menuItemsAtom,
  isLoadingAtom,
  searchQueryAtom,
  favoritesAtom,
  fetchMenuItemsAtom,
  searchMenuItemsAtom,
} from "../state/atom";
import type { MenuItem } from "../state/types";

export const useMenu = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [menuItems] = useAtom(menuItemsAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [isLoading] = useAtom(isLoadingAtom);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [, fetchMenuItems] = useAtom(fetchMenuItemsAtom);
  const [, searchItems] = useAtom(searchMenuItemsAtom);

  // Fetch menu items on initial load
  useEffect(() => {
    fetchMenuItems(selectedCategory);
  }, []);

  const handleCategoryChange = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      fetchMenuItems(category);
    },
    [setSelectedCategory, fetchMenuItems]
  );

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      searchItems(query);
    },
    [setSearchQuery, searchItems]
  );

  const toggleFavorite = useCallback(
    (item: MenuItem) => {
      setFavorites((prev) => {
        const exists = prev.some((fav) => fav.id === item.id);
        return exists
          ? prev.filter((fav) => fav.id !== item.id)
          : [...prev, item];
      });
    },
    [setFavorites]
  );

  const isFavorite = useCallback(
    (itemId: string) => {
      return favorites.some((item) => item.id === itemId);
    },
    [favorites]
  );

  return {
    selectedCategory,
    menuItems,
    searchQuery,
    favorites,
    isLoading,
    hoveredItem,
    setHoveredItem,
    handleCategoryChange,
    handleSearch,
    toggleFavorite,
    isFavorite,
  };
};
