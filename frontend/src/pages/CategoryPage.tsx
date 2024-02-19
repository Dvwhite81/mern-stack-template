import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Recipe } from '../utils/types';
import { getCategoryRecipes } from '../services/recipeService';
import DisplayRecipes from '../components/DisplayRecipes';

interface CategoryPageProps {
  category: string
  saved: Recipe[]
  handleSave: (recipe: string) => void
  handleRemoveSave: (recipe: string) => void
}

const CategoryPage = ({
  category,
  saved,
  handleSave,
  handleRemoveSave,
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
      />
    </Container>
  );
};

export default CategoryPage;
