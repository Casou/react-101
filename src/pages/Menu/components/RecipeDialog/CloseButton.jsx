import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) =>
  <button className="modal-close waves-effect waves-red btn-flat"
          onClick={onClick}
  >
    Close
  </button>;

CloseButton.propTypes = {
  onClick: PropTypes.func,
};
CloseButton.defaultProps = {};

export default CloseButton;