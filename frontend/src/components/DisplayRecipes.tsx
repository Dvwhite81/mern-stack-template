import { Container } from 'react-bootstrap';
import { Recipe } from '../utils/types';
import RecipeCard from './RecipeCard';

export interface DisplayProps {
  recipes: Recipe[]
  saved: Recipe[]
  handleSave: (recipeId: string) => void
  handleRemoveSave: (recipeId: string) => void
}

const DisplayRecipes = ({
  recipes,
  saved,
  handleSave,
  handleRemoveSave,
}: DisplayProps) => {
  return (
    <Container fluid>
      <Container className='grid-container'>
        {recipes.map((recipe, idx) => (
          <RecipeCard
            key={idx}
            recipe={recipe}
            saved={saved}
            handleSave={handleSave}
            handleRemoveSave={handleRemoveSave}
          />
        ))}
      </Container>
    </Container>
  );
};

export default DisplayRecipes;
