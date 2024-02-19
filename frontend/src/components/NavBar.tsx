import { useState } from 'react';
import { NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../utils/types';
import DropdownMenu from './DropdownMenu';
import LogoutBtn from './LogoutBtn';

interface NavBarProps {
  categories: string[]
  loggedInUser: UserType | null
  handleLogout: () => void
}

const NavBar = ({ categories, loggedInUser, handleLogout }: NavBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleVisibleClick = () => () => setIsVisible((prev) => !prev);

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      className='mx-0 d-flex justify-content-around p-2 rounded'
    >
      {!loggedInUser ? (
        <>
          <Link to='/register'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </>
      ) : (
        <>
          <Link to='/'>Home</Link>
          <NavDropdown
            style={{ color: 'whitesmoke' }}
            title='Categories'
            onClick={handleVisibleClick}
          >
            {isVisible && (
              <DropdownMenu
                categories={categories}
                handleClick={handleVisibleClick}
              />
            )}
          </NavDropdown>
          <Link to='/profile'>Profile</Link>
          <LogoutBtn handleLogout={handleLogoutClick} />
        </>
      )}
    </Navbar>
  );
};

export default NavBar;
