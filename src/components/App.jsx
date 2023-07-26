import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

let state = {
  Good: 0,
  Neutral: 0,
  Bad: 0,
};

export const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} />
      </Section>
    </>
  );
};
