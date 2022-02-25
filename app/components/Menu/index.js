/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../images/logo2.svg';
import MenuStyle from './style';

function Menu({ buttons, userName, show, onClick, sesion }) {
  return (
    <MenuStyle style={show ? { left: '0px' } : null}>
      <img className="logo" src={logo} alt="log" />
      <div className="hidden">
        <button type="button" onClick={onClick}>
          <AiOutlineMenu />
        </button>
      </div>
      <p className="bienvenida">{userName}</p>
      <div className="menu">
        {buttons.map(item => (
          <div key={uuidv4()}>
            <button
              className={item.activate && 'activate'}
              type="button"
              onClick={item.onClick}
            >
              <label>
                <i>{item.icon}</i>
                {item.text}
              </label>
            </button>
            {item.optionActivate && (
              <div className="containerOptions">
                {item.options.map(option => (
                  <button
                    key={uuidv4()}
                    className={option.activate && 'activateOption'}
                    type="button"
                    onClick={option.onClick}
                  >
                    <p>{option.text}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="buttonSalir" type="button" onClick={sesion}>
        <h2>
          <BsArrowLeftCircle />
        </h2>
      </button>
    </MenuStyle>
  );
}

Menu.propTypes = {
  buttons: PropTypes.array,
  userName: PropTypes.string,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  sesion: PropTypes.func,
};

export default Menu;
