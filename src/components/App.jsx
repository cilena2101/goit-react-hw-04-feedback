import { useState} from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState (0);

	const updateCount = e => {
	 const {name} = e.target;
	 switch (name) {
		case 'good':
			setGood(good + 1);
			break;
		case 'neutral': 
			setNeutral(neutral + 1);
			break;
		case 'bad':
			setBad(bad + 1);
			break;
		default:
			break;
	 }
	};

  const countTotalFeedback = () => {
	return good + neutral + bad;
  };

	const countPositiveFeedbackPercentage = () => {
	const total = countTotalFeedback();
		return total ? Math.round((good * 100) / total) : 0;
	};

  const options = ['good', 'neutral', 'bad'];
  return (
		<>
		  <Section title="Please leave feedback">
			<FeedbackOptions
			  options={options}
			  onLeaveFeedback={updateCount}
			/>
		  </Section>
  
  		  {countTotalFeedback() ? (
			<Section title="Statistics">
			  <Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				total={countTotalFeedback()}
				positivePercentage={countPositiveFeedbackPercentage()}
			  />
			</Section>
		  ) : (
			<Notification message="There is no feedback" />
		  )}
		</>
	);
	}
  