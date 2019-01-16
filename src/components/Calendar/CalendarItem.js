import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './../../style/calendar.scss';
import Calendar from './Calendar';


const CalendarItem = ({
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
  whiteText,
  width,
  minWidth,
  minHeight,
  height,
  ...props
}) => {
  const classes = classNames(
    'p-2',
    'border',
    'text-truncate',
    'd-sm-inline-block',
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
      'sticky-left': sticky,
      'text-white': whiteText,
    },
    className)

  return (
    <div className={classes}  {...props} style={{width,height}}/>
  )
}

CalendarItem.displayName = 'Calendar.Item';

CalendarItem.defaultProps = {
  height: '11vw',
  width: '11vw',
  minWidth: '80px',
  minHeight: '80px',
}


CalendarItem.propTypes = {
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
  whiteText: PropTypes.bool,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
}

export default CalendarItem