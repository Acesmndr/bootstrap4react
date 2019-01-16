import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Tr from '../Table/Tr'
import Td from '../Table/Td'
import Thead from '../Table/Thead'
import Th from '../Table/Th'
import './../../style/table.scss';

/*
An all-around flexible and composable component
*/
const Table = ({
  className,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  striped,
  bordered,
  borderless,
  hoverable,
  responsive,
  fullWidth,
  small,
  width,
  height,
  ...props,
}) => {
  const classes = classNames(
    'table',
    {
      'table-dark': dark,
      'table-light': light,
      'table-primary': primary,
      'table-secondary': secondary,
      'table-success': success,
      'table-danger': danger,
      'table-warning': warning,
      'table-info': info,
      'table-striped': striped,
      'table-bordered': bordered,
      'table-borderless': borderless,
      'table-hover': hoverable,
      'table-sm': small,
      'table-responsive': responsive,
    },
    className);
  return (<table className={classes} {...props} style={{ width, height }}/>);
}

Table.propTypes = {
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  hoverable: PropTypes.bool,
  small: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  responsive: PropTypes.bool,
  className: PropTypes.string,
}

export default Table;