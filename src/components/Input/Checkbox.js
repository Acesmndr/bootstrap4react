import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Checkbox = ({
  className,
  id,
  label,
  placeholder,
  valid,
  invalid,
  disabled,
  inline,
  ...props
}) => {
  const classes = classNames('form-check-input',
    {
      'is-valid': valid,
      'is-invalid': invalid,
    },
    className);
  const parentClasses = classNames('form-check', {
    'form-check-inline': inline,
  });
  return (
    <div className={parentClasses}>
      <input className={classes} type="checkbox" id={id} {...props} />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
    </div>
  )
}

// Checkbox.displayName = 'Form.Text'

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
}

export default Checkbox
