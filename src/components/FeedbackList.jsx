import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, darkMode, handleDelete }) => {
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          darkMode={darkMode}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
