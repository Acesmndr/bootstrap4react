import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DropdownDivider = ({
  className,
  ...props
}) => {
  const classes = classNames(
    'dropdown-divider',
    className)

  return (
    <div className={classes} {...props} />
  )
}

DropdownDivider.displayName = 'Dropdown.Divider';

DropdownDivider.propTypes = {
  className: PropTypes.string,
}

export default DropdownDivider;