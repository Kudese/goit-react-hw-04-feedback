import { useState } from 'react';
import FeedbackOptions from './Feedback/LeaveFeedback/FeedbackOptions';
import Statistic from './Feedback/Statistic/Statistic';
import Section from './Feedback/Section/Section';
import { useCallback } from 'react';
export function App () {
const [good, setGood]= useState(0)
const [neutral,setNeutral]= useState(0)
const [bad,setBad] = useState(0)

const handleaddFedback = useCallback(e => {
  const keys = e.target.name;
  if (keys==='good') {
    setGood(prev=>prev+1)
  }else if (keys==='neutral') {
    setNeutral(prev=>prev+1)
  }else{
setBad(prev=>prev+1)
  }
},[])

const countTotalFeedback = good+neutral+bad
const countPositiveFeedbackPercentage = ( Math.round((good * 100) / countTotalFeedback))

return (
  <div>
    <Section  title={'Please leave feedback'} >
    <FeedbackOptions
      onAddFedback={handleaddFedback}
      state={{good,neutral,bad}}
    />
       </Section>
    <Section  title={'Statistics'}>
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  </div>
);
}