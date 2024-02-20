import { Container } from 'react-bootstrap';
import { Recipe, UserType } from '../utils/types';
import RecipeCard from './RecipeCard';

export interface DisplayProps {
  recipes: Recipe[]
  saved: Recipe[]
  handleSave: (recipeId: string) => void
  handleRemoveSave: (recipeId: string) => void
  loggedInUser: UserType | null
}

const DisplayRecipes = ({
  recipes,
  saved,
  handleSave,
  handleRemoveSave,
  loggedInUser,
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
            loggedInUser={loggedInUser}
          />
        ))}
      </Container>
    </Container>
  );
};

export default DisplayRecipes;
