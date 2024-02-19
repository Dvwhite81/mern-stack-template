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
        <DashCircleFill onClick={() => handleRemoveSave(recipe)} />
      ) : (
        <PlusCircleFill onClick={() => handleSave(recipe)} />
      )}
    </Button>
  );
};

export default SaveBtn;
