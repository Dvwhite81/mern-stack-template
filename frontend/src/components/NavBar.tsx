import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../types';

interface NavBarProps {
  loggedInUser: UserType | null,
  handleLogout: () => void,
}

const NavBar = ({ loggedInUser, handleLogout }: NavBarProps) => {
  const navigate = useNavigate();
  console.log('navbar loggedInUser:', loggedInUser);

  const handleClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div>
      {!loggedInUser ? (
        <>
          <Link to='/register'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </>
      ) : (
        <>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <button type='button' onClick={handleClick}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default NavBar;
