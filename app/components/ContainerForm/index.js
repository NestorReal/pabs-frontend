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
