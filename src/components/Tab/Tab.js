import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TabItem from '../Tab/TabItem';

/*
An all-around flexible and composable component
*/
const Tab = ({
  className,
  pill,
  fullWidth,
  ...props,
}) => {
  const classes = classNames(
    'nav',
    'nav-tabs',
    {
      'nav-pills': pill,
      'nav-fill': fullWidth,
    },
    className);
  return (<ul className={ classes } { ...props } />);
}

Tab.Item = TabItem;

Tab.propTypes = {
  pill: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
}

export default Tab;