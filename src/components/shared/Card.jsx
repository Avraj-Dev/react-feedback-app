const Card = ({ children, darkMode }) => {
  return <div className={`card ${darkMode && 'reverse'}`}>{children}</div>;
};

export default Card;
