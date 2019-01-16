import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import classNames from 'classnames'

/*
An all-around flexible and composable component
*/
const CardGroup = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  width,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  ...props
}) => {
  const classes = classNames('card-group',
    'mb-4',
    {
      'text-center': centerAlign,
      'text-left': leftAlign,
      'text-right': rightAlign,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
      'text-white': danger || success || warning || info || light || dark,
    },
    className)

  return <div className={classes} {...props} style={{ width }} />
}

CardGroup.propTypes = {
  width: PropTypes.string,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string
}

CardGroup.Card = Card

export default CardGroup