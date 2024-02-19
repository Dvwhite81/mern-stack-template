import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Recipe } from '../utils/types';
import SaveBtn from './SaveBtn';

export interface RecipeCardProps {
  recipe: Recipe
  saved: Recipe[]
  handleSave: (recipe: string) => void
  handleRemoveSave: (recipe: string) => void
}

const RecipeCard = ({
  recipe,
  saved,
  handleSave,
  handleRemoveSave,
}: RecipeCardProps) => {
  const { label, image, ingredientLines, url } = recipe;

  return (
    <Card bg='dark' data-bs-theme='dark'>
      <Card.Header>
        <Link to={url}>{label}</Link>
      </Card.Header>
      <Card.Img variant='top' src={image} alt={`${label} image`} />
      <Card.Body>
        <SaveBtn
          recipe={recipe}
          saved={saved}
          handleSave={handleSave}
          handleRemoveSave={handleRemoveSave}
        />
        <Card.Title>Ingredients</Card.Title>
        <ListGroup>
          {ingredientLines.map((line, idx) => (
            <ListGroupItem key={idx} variant='dark'>
              <Card.Text>{line}</Card.Text>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
