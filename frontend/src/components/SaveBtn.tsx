import { Button } from 'react-bootstrap';
import { DashCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import { Recipe } from '../utils/types';

interface SaveBtnProps {
  recipe: Recipe
  saved: Recipe[]
  handleSave: (recipe: string) => void
  handleRemoveSave: (recipe: string) => void
}

const SaveBtn = ({
  recipe,
  saved,
  handleSave,
  handleRemoveSave,
}: SaveBtnProps) => {
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
