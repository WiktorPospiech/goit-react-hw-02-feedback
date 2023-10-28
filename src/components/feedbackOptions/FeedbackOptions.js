import styles from 'components/feedbackOptions/feedbackOptions.module.css';
import options from 'components/feedbackOptions/feedbackOptions.json';

const FeedbackOptionsList = ({ options }) => {
  return (
    <>
      {options.map(option => (
        <li className={styles.item}>
          <button>{option.name}</button>
        </li>
      ))}
    </>
  );
};

export default function FeedbackOptions() {
  return (
    <ul>
      <FeedbackOptionsList options={options} />
    </ul>
  );
}
