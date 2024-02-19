import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { CATEGORIES } from '../utils/helpers';

interface DropdownMenuProps {
  handleClick: () => void
}

const DropdownMenu = ({ handleClick }: DropdownMenuProps) => {
  return (
    <>
      {CATEGORIES.map((category) => (
        <NavDropdown.Item
          key={category}
          style={{ textAlign: 'center' }}
          onClick={handleClick}
        >
          <Link
            key={category}
            style={{ color: 'whitesmoke' }}
            to={`/categories/${category}`}
          >
            {category}
          </Link>
        </NavDropdown.Item>
      ))}
    </>
  );
};

export default DropdownMenu;
