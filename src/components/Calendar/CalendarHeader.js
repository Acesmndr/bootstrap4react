import React from 'react'
import PropTypes from 'prop-types'
import CalendarItem from './CalendarItem';
import classNames from 'classnames'
import './../../style/calendar.scss';


const Fragment = React.Fragment;
const CalendarHeader = ({
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
  height,
  ...props
}) => {
  const classes = classNames(
    'd-inline-flex',
    'pt-1',
    'text-white',
    'header',
    {
      'bg-primary': primary,
      'bg-secondary': secondary,
      'bg-success': success,
      'bg-danger': danger,
      'bg-warning': warning,
      'bg-info': info,
      'bg-light': light,
      'bg-dark': dark,
    },
    className);

  const headerClassName = (sticky) => {
    return classNames(
      'area',
      'p-1',
      'text-center',
      {
        'sticky-left': sticky,
        'fixed-corner-title': sticky,
      },
    );
  };
    
  return (
    <div className='sticky-top unset-zindex'>
      <div className={classes} {...props} style={{height}}>
      </div>
    </div>
  )
}

CalendarHeader.displayName = 'Calendar.Header'

CalendarHeader.defaultProps = {
}

CalendarHeader.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  headers: PropTypes.array,
  height: PropTypes.string,
  sticky: PropTypes.bool,
}

export default CalendarHeader