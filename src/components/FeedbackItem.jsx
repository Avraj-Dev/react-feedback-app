import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item, darkMode, handleDelete }) => {
  return (
    <Card darkMode={darkMode}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color={darkMode ? 'white' : 'black'} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
