import React from 'react'
import PropTypes from 'prop-types'
import CalendarItem from './CalendarItem';
import classNames from 'classnames'
import './../../style/calendar.scss';


const CalendarRow = ({
  className,
  ...props
}) => {
  const classes = classNames(
    'position-sticky',
    className)

  return (
    <div className={classes}>
      <div className='d-inline-flex' {...props} />
    </div>
  )
}

CalendarRow.displayName = 'Calendar.Row'

CalendarRow.propTypes = {
  className: PropTypes.string,
}

export default CalendarRow