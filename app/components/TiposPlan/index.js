/**
 *
 * TiposPlan
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CgLoadbarDoc } from 'react-icons/cg';
import { Container } from './styles';

function TiposPlan(props) {
  const getTipoPlan = tipo => {
    // eslint-disable-next-line react/prop-types
    props.getTipoPlan(tipo);
    // eslint-disable-next-line react/prop-types
    props.getStep(2);
  };

  return (
    <Container>
      <div className="cardContainer">
        <div className="tag tagRed">
          <div className="title">$ 10,000 MNX</div>
          <div className="subTitle">Planes</div>
        </div>
        <div className="triangulo trianguloRed" />
        <div className="card cardRed">
          <div className="titleCard">Cremación directa</div>
          <div className="containerText" style={{ marginTop: '31px' }}>
            <div className="center">
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="center" style={{ marginTop: '10px' }}>
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <div className="containerButton">
              <button type="button" className="primary">
                Detalles
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() => getTipoPlan('Cremación directa')}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <div className="tag tagYellow">
          <div className="title">$ 20,000 MNX</div>
          <div className="subTitle">Planes</div>
        </div>
        <div className="triangulo trianguloYellow" />
        <div className="card cardYellow">
          <div className="titleCard">Estándar</div>
          <div className="containerText">
            <div className="center">
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="center" style={{ marginTop: '10px' }}>
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <div className="containerButton">
              <button type="button" className="primary">
                Detalles
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() => getTipoPlan('Estándar')}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <div className="tag tagBlue">
          <div className="title">$ 30,000 MNX</div>
          <div className="subTitle">Planes</div>
        </div>
        <div className="triangulo trianguloBlue" />
        <div className="card cardBlue">
          <div className="titleCard">Premium</div>
          <div className="containerText">
            <div className="center">
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="center" style={{ marginTop: '10px' }}>
              <div className="icon">
                <CgLoadbarDoc />
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <div className="containerButton">
              <button type="button" className="primary">
                Detalles
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() => getTipoPlan('Premium')}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

TiposPlan.propTypes = {};

export default TiposPlan;
