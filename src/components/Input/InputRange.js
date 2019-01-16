import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const InputRange = ({
  className,
  id,
  label,
  valid,
  invalid,
  disabled,
  helpText,
  min,
  max,
  step,
  value,
  ...props
}) => {
  const classes = classNames('form-control-range',
    {
      'is-valid': valid,
      'is-invalid': invalid,
    },
    className)
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input type="range" className={classes} id={id} disabled={disabled} min={min} max={max} step={step} value={value} {...props} />
      <small className="form-text text-muted">
        {helpText}
      </small>
    </div>
  )
}

// InputRange.displayName = 'Form.Text'

InputRange.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  helpText: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
}

export default InputRange