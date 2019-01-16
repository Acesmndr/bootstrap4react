import React from 'react'
import PropTypes from 'prop-types'
import CalendarRow from './CalendarRow';
import CalendarHeader from './CalendarHeader';
import CalendarHeaderItem from './CalendarHeaderItem';
import CalendarItem from './CalendarItem';
import CalendarEvent from './CalendarEvent';
import classNames from 'classnames'
import './../../style/calendar.scss';

/*
An all-around flexible and composable component
*/
const Calendar = ({
  className,
  centerAlign,
  leftAlign,
  rightAlign,
  height,
  width,
  minWidth,
  maxWidth,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  whiteText,
  fixedHeightWidth,
  ...props
}) => {
  const parentClasses = classNames(
    'mb-2',
    {
      'd-inline-flex': width || height,
    },
    className);
  const childClasses = classNames(
    'container-fluid',
    'p-0',
    {
      'overflow-scroll': width || height,
    });
  return (<div className={parentClasses} style={{width:width, height:height}}>
    <div className={childClasses} {...props} />
  </div>);
}

Calendar.defaultProps = {
  minWidth: '200px',
}

Calendar.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  whiteText: PropTypes.bool,
  centerAlign: PropTypes.bool,
  leftAlign: PropTypes.bool,
  rightAlign: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  fixedHeightWidth: PropTypes.bool,
}

Calendar.Header = CalendarHeader;
Calendar.Row = CalendarRow;
Calendar.Item = CalendarItem;
Calendar.Event = CalendarEvent;
Calendar.HeaderItem = CalendarHeaderItem;

export default Calendar;