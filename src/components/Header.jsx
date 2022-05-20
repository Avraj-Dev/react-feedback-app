import { Link } from 'react-router-dom';
import Switch from './Switch';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`header ${darkMode && 'reverse'}`}>
      <div className='container'>
        <Link to='/'>
          <h2>Feedback</h2>
        </Link>
        <div className='header-right'>
          <div className='about-link'>
            <Link to='/about'>About</Link>
          </div>
          <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;
