/**
 *
 * ContainerForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: ${props => props.left};
  width: ${props => props.width};
  height: 100%;
  background: #ffffff;
  .footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 12.5%;
    background: #005c9e;
  }
  @media only screen and (max-width: 959px) {
    left: 0px;
    width: 100%;
  }
`;

function ContainerForm({
  children,
  left = '31.641%',
  footer = true,
  width = '68.359%',
}) {
  return (
    <Container left={left} width={width}>
      {children}
      {footer && <div className="footer" />}
    </Container>
  );
}

ContainerForm.propTypes = {
  children: PropTypes.element,
  left: PropTypes.string,
  footer: PropTypes.bool,
  width: PropTypes.string,
};

export default ContainerForm;
