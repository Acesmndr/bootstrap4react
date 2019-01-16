import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const PaginationItem = ({
  className,
  active,
  disabled,
  ...props
}) => {
  const classes = classNames(
    'page-item',
    {
      disabled,
      active,
    },
    className)

  return <li className={classes} > <a className="page-link" href="#" {...props}></a></li>
}

PaginationItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default PaginationItem