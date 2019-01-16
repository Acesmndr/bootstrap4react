import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './../../style/progressbar.scss';

const Progressbar = ({
  max,
  min,
  current,
  showPercentage,
  height,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  animated,
  striped,
  className,
  ...props
}) => {
  const currentPercentage = `${Math.abs((current-min)/(max-min) * 100)}%`
  const classes = classNames(
    'progress-bar',
  {
    'bg-success': success,
    'bg-danger': danger,
    'bg-warning': warning,
    'bg-info': info,
    'bg-light': light,
    'bg-dark': dark,
    'progress-bar-striped': striped,
    'progress-bar-animated': animated,
  }, className)

  return (<div className="progress" style={{height:height}}>
    <div className={classes} role="progressbar" aria-valuenow={current} aria-valuemin={min} aria-valuemax={max} {...props} style={{width:currentPercentage}}>{showPercentage?currentPercentage:''}</div> 
   </div>);
}

Progressbar.displayName = 'Progressbar'

Progressbar.defaultProps = {
  max: '100',
  min: '0',
  current: '50',
}

Progressbar.propTypes = {
  className: PropTypes.string,
  max: PropTypes.string,
  min: PropTypes.string,
  current: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  height: PropTypes.string,
}

export default Progressbar;