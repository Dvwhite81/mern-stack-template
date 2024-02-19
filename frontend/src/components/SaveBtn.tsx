import { Button } from 'react-bootstrap';
import { DashCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import { RecipeCardProps } from './RecipeCard';

const SaveBtn = ({
  recipe,
  saved,
  handleSave,
  handleRemoveSave,
}: RecipeCardProps) => {
  return (
    <Button className='save-btn' variant='dark'>
      {saved.includes(recipe) ? (
        <DashCircleFill onClick={() => handleRemoveSave(recipe.id)} />
      ) : (
        <PlusCircleFill onClick={() => handleSave(recipe.id)} />
      )}
    </Button>
  );
};

export default SaveBtn;
