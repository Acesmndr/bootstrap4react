import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DropdownItem from './DropdownItem';
import DropdownDivider from './DropdownDivider';
import './../../style/dropdown.scss';

const Dropdown = ({
  title,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  link,
  large,
  small,
  outlined,
  active,
  disabled,
  className,
  loading,
  href,
  onClick,
  up,
  down,
  left,
  right,
  id,
  ...props
}) => {
  // let showDropdown = false;
  const parentClasses = classNames(
    'dropdown',
    {
      'dropup' : up,
      'dropright': right,
      'dropleft': left,
    }
  );
  const classes = classNames(
    'btn',
    'btn-primary',
    'dropdown-toggle',
    {
      'btn-secondary': secondary,
      'btn-success': success,
      'btn-danger': danger,
      'btn-warning': warning,
      'btn-info': info,
      'btn-light': light,
      'btn-dark': dark,
      'btn-link': link,
      'btn-lg': large,
      'btn-sm': small,
      'btn-block': outlined,
      'active': active,
      'disabled': disabled,
    }, className);
  const toggleDropDown = (e) => {
    if ( onClick ) {
      onClick(e);
      return;
    }
    if ( href ) {
      window.location = href;
      return;
    }
    e.target.nextElementSibling.classList.toggle('show');
  }
  return (<div className={parentClasses}>
    <button type='button' className={classes} {...props} data-toggle='dropdown' aria-haspopup={true} aria-expanded={false} id={id} onClick={(e) => { toggleDropDown(e) }}>{ title }</button>
    <div className='dropdown-menu' aria-labelledby={id} {...props} >
    </div>
  </div>);
}
Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  link: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  active: PropTypes.bool,
  /** Disable Button */
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  grouped: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  up: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  id: PropTypes.string,

}

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;