export interface UserType {
  _id: string,
  username: string,
  password: string,
  recipes: Recipe[],
  createdAt: string,
  updatedAt: string,
}

export interface Recipe {
  uri: string,
  label: string,
  image: string,
  ingredientLines: string[],
  url: string,
  id: string,
}

export interface AuthResult {
  success: boolean,
  user: UserType,
  token: string,
}

export interface RecipeResult {
  recipe: Recipe,
}
