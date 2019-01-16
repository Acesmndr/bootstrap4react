import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './../../style/calendar.scss';

const CalendarEvent = ({
  className,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  sticky,
  striped,
  ...props
}) => {
  const classes = classNames(
    'event',
    'd-block',
    'p-1',
    'pl-2',
    'pr-2',
    'mb-1',
    'rounded',
    'text-truncate',
    'small',
    'text-white',
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
      'progress-bar-striped': striped,
    },
    className)

  return (
    <div className={classes}  {...props} />
  )
}

CalendarEvent.displayName = 'Calendar.Event'

CalendarEvent.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  sticky: PropTypes.bool,
  striped: PropTypes.bool,
}

export default CalendarEvent;