/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../images/logo2.svg';
import MenuStyle from './style';

function Menu({ buttons, userName }) {
  return (
    <MenuStyle>
      <img className="logo" src={logo} alt="log" />
      <div className="bienvenida">
        Bienvenido {userName}
        <div className="subtext">Tipo de usuario</div>
      </div>
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
      <button className="buttonSalir" type="button">
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
};

export default Menu;
