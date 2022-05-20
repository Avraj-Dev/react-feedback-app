import { FaSun, FaMoon } from 'react-icons/fa';

const Switch = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <div className={`switch ${darkMode && 'reverse'}`} onClick={handleToggle}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default Switch;
