import Switch from './Switch';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`header ${darkMode && 'reverse'}`}>
      <div className='container'>
        <h2>Feedback UI</h2>
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
};

export default Header;
