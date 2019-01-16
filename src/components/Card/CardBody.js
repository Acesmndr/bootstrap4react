import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardBody = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  ...props
}) => {
  const classes = classNames('card-body',
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

CardBody.displayName = 'Card.Body'

CardBody.propTypes = {
  className: PropTypes.string,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
}

export default CardBody