import React from 'react'
import PropTypes from 'prop-types'
import CardImage from './CardImage'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardText from './CardText'
import CardTitle from './CardTitle'
import CardFooter from './CardFooter'
import classNames from 'classnames'

/*
An all-around flexible and composable component
*/
const Card = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  width,
  minWidth,
  maxWidth,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  whiteText,
  ...props
}) => {
  const classes = classNames('card',
  'mb-2',
  'shadow-sm',
  {
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'text-white': whiteText || primary || secondary || danger || success || warning || info || dark,
  },
  className)
  
  return <div className={classes} {...props} style={{width,minWidth,maxWidth}} />
}

Card.defaultProps = {
  minWidth: '200px',
}

Card.propTypes = {
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  whiteText: PropTypes.bool,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string
}

Card.Image = CardImage
Card.Header = CardHeader
Card.Body = CardBody
Card.Text = CardText
Card.Title = CardTitle
Card.Footer = CardFooter

export default Card