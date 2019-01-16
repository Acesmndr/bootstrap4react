import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Tr from '../Table/Tr'
import Td from '../Table/Td'
/*
An all-around flexible and composable component
*/
const Th = ({
  className,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  sticky,
  stickyTop,
  ...props,
}) => {
  const classes = classNames(
    'table-light',
    {
      'table-dark': dark,
      'table-primary': primary,
      'table-secondary': secondary,
      'table-success': success,
      'table-danger': danger,
      'table-warning': warning,
      'table-info': info,
      'sticky-left': sticky,
      'sticky-top': stickyTop,
      'unset-zindex': stickyTop,
    },
    className);
  return (<th className={classes} {...props} />);
}

Tr.propTypes = {
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyTop: PropTypes.bool,
  className: PropTypes.string,
}

export default Th;