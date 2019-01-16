import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './../../style/button.scss'

const Button = ({
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  outlinePrimary,
  outlineSecondary,
  outlineSuccess,
  outlineDanger,
  outlineWarning,
  outlineInfo,
  outlineLight,
  outlineDark,
  link,
  large,
  small,
  outlined,
  active,
  disabled,
  className,
  loading,
  onClick,
  grouped,
  ...props
}) => {
  const classes = classNames(
    'btn', 
    'btn-primary',
    {
      'btn-secondary': secondary,
      'btn-success': success,
      'btn-danger': danger,
      'btn-warning': warning,
      'btn-info': info,
      'btn-light': light,
      'btn-dark': dark,
      'btn-outline-primary': outlinePrimary,
      'btn-outline-secondary': outlineSecondary,
      'btn-outline-success': outlineSuccess,
      'btn-outline-danger': outlineDanger,
      'btn-outline-warning': outlineWarning,
      'btn-outline-info': outlineInfo,
      'btn-outline-light': outlineLight,
      'btn-outline-dark': outlineDark,
      'btn-link': link,
      'btn-lg': large,
      'btn-sm': small,
      'btn-block': outlined,
      'active': active,
      'disabled': disabled,
      'm-1': !grouped,
      'btn-loading': loading,
    }, className)
    
    return <button type="button" className={classes} onClick={onClick} {...props}>
  </button>
}

Button.displayName = 'Button';

Button.defaultProps = {
  onClick: (evt) => {
    evt.preventDefault();
  }
};

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  outlinePrimary: PropTypes.bool,
  outlineSecondary: PropTypes.bool,
  outlineSuccess: PropTypes.bool,
  outlineDanger: PropTypes.bool,
  outlineWarning: PropTypes.bool,
  outlineInfo: PropTypes.bool,
  outlineLight: PropTypes.bool,
  outlineDark: PropTypes.bool,
  link: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  active: PropTypes.bool,
  /** Disable Button */
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  grouped: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;