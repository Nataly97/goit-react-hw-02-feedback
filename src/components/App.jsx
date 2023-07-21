import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

let state = {
  Good: 0,
  Neutral: 0,
  Bad: 0
 }
 
export const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={()=> console.log("test")}/>
        <Statistics good={0} neutral={0} bad={0} />
      </Section>
    </>
  );
};
