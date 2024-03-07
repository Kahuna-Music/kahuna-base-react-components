import React from 'react';
import PropTypes from 'prop-types';
import '../styles/kbutton.css';

/**
 * Primary UI component for user interaction
 */
export const KSpan = ({text, ...props}) => {
  return (
    <span
      {...props}
    >
      {text}
    </span>
  );
};

KSpan.propTypes = {
  text: PropTypes.string.isRequired,
};

KSpan.defaultProps = {};

export default KSpan;
