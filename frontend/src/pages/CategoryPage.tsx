import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Recipe, UserType } from '../utils/types';
import { getCategoryRecipes } from '../services/recipeService';
import DisplayRecipes from '../components/DisplayRecipes';

interface CategoryPageProps {
  category: string
  saved: Recipe[]
  handleSave: (recipe: string) => void
  handleRemoveSave: (recipe: string) => void
  loggedInUser: UserType | null
}

const CategoryPage = ({
  category,
  saved,
  handleSave,
  handleRemoveSave,
  loggedInUser,
}: CategoryPageProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const results = await getCategoryRecipes(category);
      setRecipes(results);
    };

    fetchRecipes();
  }, [category]);

  return (
    <Container fluid>
      <h2 className='pad-left'>{category}</h2>
      <DisplayRecipes
        recipes={recipes}
        saved={saved}
        handleSave={handleSave}
        handleRemoveSave={handleRemoveSave}
        loggedInUser={loggedInUser}
      />
    </Container>
  );
};

export default CategoryPage;
