import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardHeader = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  ...props
}) => {
  const classes = classNames('card-header',
  {
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
  },
  className)

  return (
    <div className={classes} {...props} />
  )
}

CardHeader.displayName = 'Card.Header'

CardHeader.propTypes = {
  className: PropTypes.string,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
}

export default CardHeader