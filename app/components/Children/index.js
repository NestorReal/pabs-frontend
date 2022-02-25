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
  transition: 1s;
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
      color: #005c9e;
      h1 {
        margin: 0px;
      }
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
        font-weight: bold;
        letter-spacing: 0.375px;
        color: #113255;
        margin-top: 3%;
        p {
          margin: 0px;
        }
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
  @media only screen and (max-width: 950px) {
    left: 0px;
    width: 100%;
    .header {
      .sesion {
        display: none;
      }
    }
  }
`;

function Children({ title, userName, typeUser, sesion, children, style }) {
  return (
    <ChildrenStyle style={style}>
      <div className="header">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="sesion">
          <div className="text">
            <p>Bienvenido {userName}</p>
            <div className="subtext">
              <p>Tipo de usuario: {typeUser}</p>
            </div>
          </div>
          <button type="button" className="sesionButton" onClick={sesion}>
            <p>Cerrar Sesión</p>
            <p>
              <ImExit />
            </p>
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
  style: PropTypes.object,
};

export default Children;
