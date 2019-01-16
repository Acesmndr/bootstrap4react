import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './../../style/calendar.scss';


const CalendarHeaderItem = ({
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
  height,
  truncate,
  ...props
}) => {
  const classes = classNames(
    'p-1',
    'text-center',
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
      'text-white': whiteText,
      'sticky-left': sticky,
      'fixed-corner-title': sticky,
      'text-truncate': truncate,
    },
    className)

  return (
    <div className={classes}  {...props} style={{width,height,minWidth}}/>
  )
}

CalendarHeaderItem.displayName = 'Calendar.HeaderItem'

CalendarHeaderItem.defaultProps = {
  height: '40px',
  width: '11vw',
  minWidth: '80px',
};

CalendarHeaderItem.propTypes = {
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
  truncate: PropTypes.string,
}

export default CalendarHeaderItem