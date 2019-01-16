import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DropdownItem = ({
  className,
  href,
  active,
  disabled,
  ...props
}) => {
  const classes = classNames(
    'dropdown-item',
    {
      'active': active,
      'disabled': disabled,
    },
    className)

  return (
    <a className={classes}  href={href} {...props} />
  )
}

DropdownItem.displayName = 'Dropdown.Item';

DropdownItem.defaultProps = {
  href: '#',
}

DropdownItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default DropdownItem;