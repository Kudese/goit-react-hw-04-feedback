import { useState } from 'react';
import FeedbackOptions from './Feedback/LeaveFeedback/FeedbackOptions';
import Statistic from './Feedback/Statistic/Statistic';
import Section from './Feedback/Section/Section';
export function App () {
const [good, setGood]= useState(0)
const [neutral,setNeutral]= useState(0)
const [bad,setBad] = useState(0)

const handleaddFedback = e => {
  const keys = e.target.name;
  this.setState(prevState => {
    return { [keys]: prevState[keys] + 1 };
  });
};
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