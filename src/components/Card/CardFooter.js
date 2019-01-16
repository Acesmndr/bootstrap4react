import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardFooter = ({
  className,
  muted,
  centerAlign,
  leftAlign,
  rightAlign,
  ...props
}) => {
  const classes = classNames('card-footer', {
    'text-muted': muted,
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
  }, className)

  return (
    <div className={classes} {...props}/>
  )
}

CardFooter.displayName = 'Card.Footer'

CardFooter.propTypes = {
  className: PropTypes.string,
  muted: PropTypes.bool,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
}

export default CardFooter