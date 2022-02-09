/**
 *
 * Historico
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HistoricoStyle = styled.div`
  position: absolute;
  width: 20.65%;
  height: 24.5%;
  right: 8%;
  top: 6%;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2.1% 1% 0.6% 2.29%;
  h1 {
    color: #005c9e;
    font-weight: normal;
    margin: 0px;
  }
  p {
    color: #113255;
    float: right;
  }
`;

function Historico({ text, value }) {
  return (
    <HistoricoStyle>
      <h1>$ {value}</h1>
      <p>{text}</p>
    </HistoricoStyle>
  );
}

Historico.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

export default Historico;
