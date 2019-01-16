import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TabItem = ({
  className,
  href,
  active,
  disabled,
  ...props
}) => {
  const classes = classNames(
    'nav-item',
    'nav-link',
    {
      'active': active,
      'disabled': disabled,
    },
    className)

  if (!href) {
    return (<div className={classes} href={href} {...props} />);
  }
  return (<a className={classes} href={href} {...props} />);
}

TabItem.displayName = 'Tab.Item';

TabItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default TabItem;