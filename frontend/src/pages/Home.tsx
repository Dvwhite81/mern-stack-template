import { SyntheticEvent } from 'react';
import { Container } from 'react-bootstrap';
import { Recipe, UserType } from '../utils/types';
import DisplayRecipes from '../components/DisplayRecipes';
import Search from '../components/Search';

interface HomeProps {
  query: string
  setQuery: (value: string) => void
  handleSubmit: (e: SyntheticEvent) => void
  recipes: Recipe[]
  saved: Recipe[]
  handleSave: (recipe: string) => void
  handleRemoveSave: (recipe: string) => void
  loggedInUser: UserType | null
}

const Home = ({
  query,
  setQuery,
  handleSubmit,
  recipes,
  saved,
  handleSave,
  handleRemoveSave,
  loggedInUser,
}: HomeProps) => {


  return (
    <Container fluid>
      <Search query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
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

export default Home;
