import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './../../style/avatar.scss'

const Avatar = ({
  className,
  alt,
  src,
  round,
  rounded,
  roundedTop,
  roundedRight,
  roundedBottom,
  roundedLeft,
  square,
  size,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  bgColor,
  ...props
}) => {
  const classes = classNames('cf-avatar',
    'd-inline-block',
    'text-center',
    'text-white',
    'border',
    'shadow-sm',
  {
    'rounded': rounded,
    'rounded-top': roundedTop,
    'rounded-right': roundedRight,
    'rounded-bottom': roundedBottom,
    'rounded-left': roundedLeft,
    'rounded-0': square,
    'rounded-circle': round,
    'bg-primary': !bgColor,
    'bg-secondary': secondary,
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
  },
    className)
  if(src) {
    return (
      <img src={src} alt={alt} style={{ height:size, width:size }} className={classes} {...props} />
    )
  }
  return (
    <div className={classes} style={{ height: size, width: size, lineHeight: size, fontSize: `${parseInt(parseInt(size)/3)}px`, background: bgColor }} {...props} />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  round: PropTypes.bool,
  rounded: PropTypes.bool,
  roundedTop: PropTypes.bool,
  roundedBottom: PropTypes.bool,
  roundedLeft: PropTypes.bool,
  roundedRight: PropTypes.bool,
  square: PropTypes.bool,
  size: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  bgColor: PropTypes.string,
}

Avatar.defaultProps = {
  size: '40px',
}

export default Avatar
