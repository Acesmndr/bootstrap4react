import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardTitle = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  ...props
}) => {
  const classes = classNames('card-title',
  {
    'text-center': centerAlign,
    'text-left': leftAlign,
    'text-right': rightAlign,
  },
  className)

  return (
    <h5 className={classes} {...props} />
  )
}

CardTitle.displayName = 'Card.Title'

CardTitle.propTypes = {
  className: PropTypes.string,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
}

export default CardTitle