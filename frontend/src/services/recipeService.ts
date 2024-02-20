import axios from 'axios';
import { Recipe, RecipeResult } from '../utils/types';

const appId = import.meta.env.VITE_APP_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export const getRecipes = async (query: string) => {
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}`;
  const response = await axios.get(URL);
  const results = response.data.hits;
  return results.map((r: RecipeResult) => r.recipe);
};

export const getRecipeById = async (uri: string) => {
  console.log('getRecipeById uri:', uri);
  console.log('getRecipeById parsed uri:', uri.toString());

  const URL = `https://api.edamam.com/api/recipes/v2/fields=[uri: ${uri}]`;
  const response = await axios.get(URL);
  console.log('getRecipeById response:', response);
  const results = response.data.hits;
  console.log('getRecipeById results:', results);
  const parsed = results.map((r: Recipe) => r);
  console.log('getRecipeById parsed:', parsed);
  return parsed;
};

export const getCategoryRecipes = async (category: string) => {
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${apiKey}&cuisineType=${category}`;
  const response = await axios.get(URL);
  const results = response.data.hits;
  const parsed = results.map((r: RecipeResult) => r.recipe);
  console.log('getCategoryRecipes parsed:', parsed);
  return parsed;
};

export const CATEGORIES = [
  'American',
  'Asian',
  'French',
  'Indian',
  'Italian',
  'Mexican',
];
