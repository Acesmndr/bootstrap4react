import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Col = ({
  className,
  medium,
  small,
  large,
  size,
  ...props
}) => {
  const classes = classNames('col',
    `col-${size}`,
    medium?`col-md-${medium}`:'',
    small?`col-sm-${small}`:'',
    large?`col-lg-${large}`:'',
    {
    },
    className)
  return (
    <div className={classes} {...props} />
  )
}

Col.propTypes = {
  className: PropTypes.string,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  size: PropTypes.number,
};

export default Col;
