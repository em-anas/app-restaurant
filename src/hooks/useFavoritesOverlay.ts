// useFavoritesOverlay.ts
import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { favoritesAtom, showFavoritesAtom } from "../state/atom";
import type { MenuItem } from "../state/types";

export const useFavoritesOverlay = () => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const [showFavorites, setShowFavorites] = useAtom(showFavoritesAtom);

  // hide the overlay when favorites are empty
  useEffect(() => {
    if (favorites.length === 0) {
      setShowFavorites(false);
    }
  }, [favorites, setShowFavorites]);

  const toggleFavoritesOverlay = useCallback(() => {
    setShowFavorites((prev) => !prev);
  }, [setShowFavorites]);

  const removeFromFavorites = useCallback(
    (item: MenuItem) => {
      setFavorites((prev) => prev.filter((fav) => fav.id !== item.id));
    },
    [setFavorites]
  );

  return {
    favorites,
    showFavorites,
    toggleFavoritesOverlay,
    removeFromFavorites,
    hasFavorites: favorites.length > 0,
  };
};
