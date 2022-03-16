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
    padding: 2% 3%;
  }
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    width: 100%;
    height: 16.5%;
    position: absolute;
    top: 0px;
    .title {
      color: #005c9e;
      h1 {
        margin: 0px;
      }
    }
    .sesion {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      padding-top: 3%;
      .text {
        letter-spacing: 0.375px;
        color: #113255;
        p {
          font-weight: bold;
          margin: 0px;
        }
        .subtext p {
          font-weight: 400;
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
        align-items: flex-start;
        justify-content: center;
        column-gap: 5%;
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
        p {
          white-space: nowrap;
          margin: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    left: 0px;
    width: 100%;
    .header {
      justify-content: center;
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
