import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardText = ({
  className,
  muted,
  ...props
}) => {
  const classes = classNames('card-text', className)
  if(muted) {
    return <p className={classes} {...props} >
      <small className="text-muted"></small>
    </p>
  }
  return (
    <p className={classes} {...props} />
  )
}

CardText.displayName = 'Card.Text'

CardText.propTypes = {
  muted: PropTypes.bool,
  className: PropTypes.string,
}

export default CardText