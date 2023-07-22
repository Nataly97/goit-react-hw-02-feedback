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
        {/* <FeedbackOptions options={state} onLeaveFeedback={()=> console.log("test")}/> */}
        <FeedbackOptions options={state} onLeaveFeedback/>
        <Statistics good={10} neutral={state.Neutral} bad={state.Bad} />
      </Section>
    </>
  );
};
