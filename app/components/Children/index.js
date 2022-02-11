/**
 *
 * Children
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';

const ChildrenStyle = styled.div`
  position: absolute;
  width: 87.5%;
  height: 100%;
  left: 12.5%;
  top: 0px;
  .bodyChildren {
    position: absolute;
    top: 16.5%;
    width: 100%;
    min-height: 83.5%;
    height: auto;
  }
  .header {
    width: 100%;
    height: 16.5%;
    position: absolute;
    top: 0px;
    .title {
      position: absolute;
      top: 14%;
      left: 4%;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 55px;
      color: #005c9e;
    }
    .sesion {
      width: 41%;
      position: absolute;
      right: 0px;
      top: 0px;
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      padding-right: 30px;
      .text {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.375px;
        color: #113255;
      }
      .subtext {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        letter-spacing: 0.375px;
        color: #000000;
      }
      .sesionButton {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: auto;
        width: 30%;
        background: transparent;
        border: none;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 38px;
        letter-spacing: 0.375px;
        color: #000000;
      }
    }
  }
`;

function Children({ title, userName, typeUser, sesion, children }) {
  return (
    <ChildrenStyle>
      <div className="header">
        <div className="title">{title}</div>
        <div className="sesion">
          <div className="text">
            Bienvenido {userName}
            <div className="subtext">Tipo de usuario: {typeUser}</div>
          </div>
          <button type="button" className="sesionButton" onClick={sesion}>
            Cerrar Sesión
            <ImExit />
          </button>
        </div>
      </div>
      <div className="bodyChildren">{children}</div>
    </ChildrenStyle>
  );
}

Children.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  typeUser: PropTypes.string,
  sesion: PropTypes.func,
  children: PropTypes.element,
};

export default Children;
