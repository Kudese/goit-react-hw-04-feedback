import PropTypes from 'prop-types';
import s from '../LeaveFeedback/LeaveFeedback.module.css';
export default function LeaveFeeedback({ state, onAddFedback }) {
  return (
    <div className={s.container}>
      {Object.keys(state).map(el => {
        return (
          <button
            key={el}
            className={s.btn}
            type="button"
            onClick={onAddFedback}
            name={el}
          >
            {el[0].toUpperCase() + el.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
LeaveFeeedback.propTypes = {
  onAddFedback: PropTypes.func.isRequired,
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
