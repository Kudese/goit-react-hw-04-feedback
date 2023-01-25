import PropTypes from 'prop-types';
import { memo } from 'react';
import s from '../LeaveFeedback/LeaveFeedback.module.css';
export  const FeedbackOptions = memo(({ state, onAddFedback })=> {
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
})
FeedbackOptions.propTypes = {
  onAddFedback: PropTypes.func.isRequired,
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
