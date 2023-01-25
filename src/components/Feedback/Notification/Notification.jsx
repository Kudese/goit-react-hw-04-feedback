import PropTypes from 'prop-types';
export default function Notification({ message }) {
  return <div>{message}</div>;
}
Notification.propType = {
  message: PropTypes.string.isRequired,
};
