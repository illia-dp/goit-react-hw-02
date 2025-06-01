import { useEffect, useState } from 'react'
import Description from './components/Descriprtion/Description.jsx';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification.jsx'
import './App.css'

const initialFeedback = {good: 0, neutral: 0, bad: 0};

const App = () => {
  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem("feedback")) || initialFeedback);
  
  useEffect(() => { localStorage.setItem("feedback", JSON.stringify(feedback)); }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
  }

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="container">

      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? 
        (<Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />) : (<Notification />)
      }
    </div>
  )
}

export default App
