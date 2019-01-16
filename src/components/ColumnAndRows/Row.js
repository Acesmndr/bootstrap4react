import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = ({
  className,
  medium,
  small,
  large,
  size,
  ...props
}) => {
  const classes = classNames('row',
   className)
  return (
    <div className={classes} {...props} />
  )
}

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
