import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

interface DropdownMenuProps {
  categories: string[]
  handleClick: () => void
}

const DropdownMenu = ({ categories, handleClick }: DropdownMenuProps) => {
  return (
    <>
      {categories.map((category) => (
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
