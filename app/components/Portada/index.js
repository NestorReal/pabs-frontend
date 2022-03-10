/**
 *
 * Portada
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import portada from '../../images/portada1.jpg';
import logo from '../../images/logo.svg';

const StylePortada = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  min-height: 720px;
  width: 31.641%;
  background-repeat: no-repeat;
  background-image: url(${portada});
  background-size: cover;
  img {
    position: absolute;
    top: 3.333%;
    left: 7.407%;
    height: 9.264%;
    width: 27.16%;
  }
  @media only screen and (max-width: 915px) {
    display: none;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    min-height: 540px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    min-height: 1080px;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    min-height: 1440px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    min-height: 2160px;
  }
  @media only screen and (min-width: 7680px) {
    min-height: 4320px;
  }
`;

function Portada() {
  return (
    <StylePortada>
      <img src={logo} alt="logo" />
    </StylePortada>
  );
}

Portada.propTypes = {};

export default Portada;
