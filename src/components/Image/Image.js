import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Image = ({
  className,
  alt,
  src,
  badge,
  rounded,
  roundedTop,
  roundedRight,
  roundedBottom,
  roundedLeft,
  square,
  height,
  width,
  ...props
}) => {
  const classes = classNames('img', {
    'rounded': rounded,
    'rounded-top': roundedTop,
    'rounded-right': roundedRight,
    'rounded-bottom': roundedBottom,
    'rounded-left': roundedLeft,
    'rounded-0': square,
    'rounded-circle': badge,
  },
  className)

  return (
    <img src={src} alt={alt} style={{maxWidth:'100%'}} className={classes} {...props} height={height} width={width}/>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  badge: PropTypes.bool,
  rounded: PropTypes.bool,
  roundedTop: PropTypes.bool,
  roundedBottom: PropTypes.bool,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
  square: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default Image