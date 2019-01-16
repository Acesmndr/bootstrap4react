import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({
  className,
  id,
  label,
  placeholder,
  email,
  password,
  text,
  textarea,
  valid,
  invalid,
  disabled,
  helpText,
  large,
  small,
  ...props
}) => {
  const classes = classNames('form-control',
    {
      'is-valid': valid,
      'is-invalid': invalid,
      'form-control-lg': large,
      'form-control-sm': small,
    },
    className)
  const type = [
    {
      name: 'password',
      value: password,
    },
    {
      name: 'email',
      value: email,
    },
    {
      name: 'textarea',
      value: textarea,
    },
    {
      name: 'text',
      value: true,
    },
    ].filter(x => x.value)[0];
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      {
        ( type.name !== 'textarea' ) ?
          ( <input type={type.name} className={classes} id={id} placeholder={placeholder} disabled={disabled} {...props} /> ) :
          ( <textarea className={classes} id={id} placeholder={placeholder} disabled={disabled} {...props} /> )
      }
      <small className="form-text text-muted">
        {helpText}
      </small>
    </div>
  )
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  email: PropTypes.bool,
  password: PropTypes.bool,
  text: PropTypes.bool,
  textarea: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  helpText: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
}

export default Input