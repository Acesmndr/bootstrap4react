import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Text = ({
  className,
  small,
  textCentered,
  truncate,
  muted,
  hide,
  size,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  d1,
  d2,
  d3,
  d4,
  ...props
}) => {
  const classes = classNames(
    {
      'small': small,
      'text-center': textCentered,
      'text-truncate': truncate,
      'hidden': hide,
      'text-muted': muted,
      'text-primary': primary,
      'text-secondary': secondary,
      'text-success': success,
      'text-danger': danger,
      'text-warning': warning,
      'text-info': info,
      'text-light': light,
      'text-dark': dark,
      'h1': h1,
      'h2': h2,
      'h3': h3,
      'h4': h4,
      'h5': h5,
      'h6': h6,
      'display-1': d1,
      'display-2': d2,
      'display-3': d3,
      'display-4': d4,
    },
    className)

  return (
    <p className={classes} {...props} style={{ fontSize: size }}/>
  );
}

Text.displayName = 'Text'

Text.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  size: PropTypes.string,
  textCentered: PropTypes.bool,
  truncate: PropTypes.bool,
  muted: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  d1: PropTypes.bool,
  d2: PropTypes.bool,
  d3: PropTypes.bool,
  d4: PropTypes.bool,
  hide: PropTypes.bool,
}

export default Text