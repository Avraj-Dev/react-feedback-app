import { useEffect, useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [darkMode, setDarkMode] = useState(handleInitialTheme);

  function handleInitialTheme() {
    const item = JSON.parse(localStorage.getItem('dark_mode'));
    if (item === true) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    localStorage.setItem('dark_mode', darkMode);
  }, [darkMode]);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='container'>
        <FeedbackForm darkMode={darkMode} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          darkMode={darkMode}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
};

export default App;
