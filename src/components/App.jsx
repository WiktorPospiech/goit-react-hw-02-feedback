import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Title from './title/Title';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Title />
      <FeedbackOptions />
    </div>
  );
};
