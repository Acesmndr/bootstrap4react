import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import PaginationItem from './PaginationItem';

const Pagination = ({
  className,
  large,
  small,
  centerAlign,
  leftAlign,
  rightAlign,
  ...props
}) => {
  const classes = classNames(
    'pagination',
    {
      'pagination-lg': large,
      'pagination-sm': small,
      'justify-content-start': leftAlign,
      'justify-content-center': centerAlign,
      'justify-content-end': rightAlign,

    },
    className);

  return <nav aria-label="Page navigation example">
    <ul className={classes} {...props}></ul>
  </nav>;
}

Pagination.Item = PaginationItem;

Pagination.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
}

export default Pagination