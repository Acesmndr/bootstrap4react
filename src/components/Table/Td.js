import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
An all-around flexible and composable component
*/
const Td = ({
  className,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  ...props,
}) => {
  const classes = classNames(
    {
      'table-dark': dark,
      'table-light': light,
      'table-primary': primary,
      'table-secondary': secondary,
      'table-success': success,
      'table-danger': danger,
      'table-warning': warning,
      'table-info': info,
    },
    className);
  return (<td className={classes} {...props} />);
}

Td.propTypes = {
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
}

export default Td;