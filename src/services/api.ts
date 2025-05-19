import axios from "axios";
import type { ResponseType } from "./types";
import type { MenuItem } from "../state/types";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const generatePrice = (min = 8, max = 30): string => {
  return `$${Math.floor(Math.random() * (max - min + 1)) + min}`;
};

const apiService = {
  getMenuByCategory: async (category: string): Promise<MenuItem[]> => {
    try {
      const response = await api.get<{ meals: ResponseType[] | null }>(
        `/filter.php?c=${encodeURIComponent(category)}`
      );

      if (!response.data.meals) {
        return [];
      }

      const detailedItems = await Promise.all(
        response.data.meals.map(async (meal) => {
          try {
            const detailResponse = await api.get<{ meals: ResponseType[] }>(
              `/lookup.php?i=${meal.idMeal}`
            );

            if (!detailResponse.data.meals || !detailResponse.data.meals[0]) {
              throw new Error(`No details found for meal ID: ${meal.idMeal}`);
            }

            const detailedMeal = detailResponse.data.meals[0];

            return {
              id: meal.idMeal,
              name: meal.strMeal,
              image: meal.strMealThumb,
              description:
                detailedMeal.strInstructions.substring(0, 100) + "...",
              price: generatePrice(),
              category: detailedMeal.strCategory,
            };
          } catch (detailError) {
            console.error(
              `Error fetching details for meal ${meal.idMeal}:`,
              detailError
            );

            return {
              id: meal.idMeal,
              name: meal.strMeal,
              image: meal.strMealThumb,
              description: "Description unavailable",
              price: generatePrice(),
              category,
            };
          }
        })
      );

      return detailedItems;
    } catch (error) {
      console.error("Error fetching menu items by category:", error);
      throw error;
    }
  },

  searchMenuItems: async (
    query: string,
    category?: string
  ): Promise<MenuItem[]> => {
    try {
      const response = await api.get<{
        meals: ResponseType[] | null;
      }>(`/search.php?s=${encodeURIComponent(query)}`);

      if (!response.data.meals) {
        return [];
      }

      const filteredMeals = category
        ? response.data.meals.filter((meal) => meal.strCategory === category)
        : response.data.meals;

      return filteredMeals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        description: meal.strInstructions.substring(0, 100) + "...",
        price: generatePrice(),
        category: meal.strCategory,
      }));
    } catch (error) {
      console.error("Error searching menu items:", error);
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get("/categories.php");
      return response.data.categories || [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
  getMealById: async (id: string): Promise<MenuItem | null> => {
    try {
      const response = await api.get(`/lookup.php?i=${id}`);

      if (!response.data.meals || !response.data.meals[0]) {
        return null;
      }

      const meal = response.data.meals[0];

      return {
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        description: meal.strInstructions,
        price: generatePrice(),
        category: meal.strCategory,
      };
    } catch (error) {
      console.error("Error fetching meal details:", error);
      throw error;
    }
  },
};

export default apiService;
