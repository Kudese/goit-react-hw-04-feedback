import { Component } from 'react';
import FeedbackOptions from './Feedback/LeaveFeedback/FeedbackOptions';
import Statistic from './Feedback/Statistic/Statistic';
import Section from './Feedback/Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleaddFedback = e => {
    const keys = e.target.name;
    this.setState(prevState => {
      return { [keys]: prevState[keys] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section  title={'Please leave feedback'} >
        <FeedbackOptions
          onAddFedback={this.handleaddFedback}
          state={this.state}
        />
           </Section>
        <Section  title={'Statistics'}>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
