import { useEffect, useState } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = ({ darkMode, handleAdd }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (text.length <= 10) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [text]);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText('');
    }
  };

  return (
    <Card darkMode={darkMode}>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          darkMode={darkMode}
          select={(value) => setRating(value)}
        />
        <div className={`input-group ${darkMode && 'reverse'}`}>
          <input
            value={text}
            onChange={handleText}
            type='text'
            placeholder='Write a review'
            className={darkMode ? 'reverse' : null}
          />
          <Button version='secondary' type='submit' isDisabled={isDisabled}>
            Submit
          </Button>
        </div>
        <p className={`message ${isDisabled && text.length >= 1 && 'active'}`}>
          Review must be at least 10 characters
        </p>
      </form>
    </Card>
  );
};

export default FeedbackForm;
