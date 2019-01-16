import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Badge = ({
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  pill,
  className,
  onClick,
  ...props
}) => {
  const classes = classNames(
    'badge', 
    'badge-primary',
    {
      'badge-pill': pill,
      'badge-secondary': secondary,
      'badge-success': success,
      'badge-danger': danger,
      'badge-warning': warning,
      'badge-info': info,
      'badge-light': light,
      'badge-dark': dark,
    }, className)
    
    return <span className={classes} {...props}/>
}

Badge.displayName = 'Badge'

Badge.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  pill: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Badge;