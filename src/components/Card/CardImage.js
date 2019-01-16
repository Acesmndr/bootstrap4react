import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardImage = ({
  alt,
  src,
  className,
  ...props
}) => {
  const classes = classNames('card-img-top', className)

  return (
    <img src={src} alt={alt} className={classes} {...props} />
  )
}

CardImage.displayName = 'Card.Image'

CardImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default CardImage