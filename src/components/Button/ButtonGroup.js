import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonGroup = ({
  className,
  ...props
}) => {
  const classes = classNames('btn-group',
    'm-1',
    className);
  return (
    <div className={classes} role="group" {...props} />
  )
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
}

export default ButtonGroup
