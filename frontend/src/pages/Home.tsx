import { SyntheticEvent } from 'react';
import { Container } from 'react-bootstrap';
import { Recipe, UserResult, UserType } from '../utils/types';
import userService from '../services/userService';
import DisplayRecipes from '../components/DisplayRecipes';
import Search from '../components/Search';

interface HomeProps {
  query: string
  setQuery: (value: string) => void
  handleSubmit: (e: SyntheticEvent) => void
  recipes: Recipe[]
  saved: Recipe[]
  setSaved: (recipe: Recipe[]) => void
  loggedInUser: UserType | null
  setMessage: (message: string) => void
}

const Home = ({
  query,
  setQuery,
  handleSubmit,
  recipes,
  saved,
  setSaved,
  loggedInUser,
  setMessage,
}: HomeProps) => {
  const handleSave = async (recipeId: string) => {
    if (!loggedInUser) return;

    const result: UserResult = await userService.addUserRecipe(
      loggedInUser.username,
      recipeId,
    );

    if (result) {
      const { message, recipes } = result;
      setMessage(message);
      if (recipes) {
        setSaved(recipes);
      }
    }
  };

  const removeSave = async (recipeId: string) => {
    if (loggedInUser && window.confirm('Unsave recipe?')) {
      const result = await userService.deleteUserRecipe(loggedInUser.username, recipeId);

      if (result) {
        const { message, recipes } = result;
        setMessage(message);
        if (recipes) {
          setSaved(recipes);
        }
      }
    }
  };

  return (
    <Container fluid>
      <Search query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <DisplayRecipes
        recipes={recipes}
        saved={saved}
        handleSave={handleSave}
        handleRemoveSave={removeSave}
      />
    </Container>
  );
};

export default Home;
