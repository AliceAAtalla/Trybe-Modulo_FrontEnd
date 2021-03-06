import React from 'react';
import PropTypes from 'prop-types';
import '../Alert/Alert.css';

const Alert = (props) => {
  const { hideComponent, children: { title, content, timeSeconds }} = props;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

Alert.prototypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  }),
};

Alert.defaultProps = {
  children: {
    title: "Algum título",
    content: "Algum conteúdo",
    timeSeconds: 3
    },
}

export default Alert;
