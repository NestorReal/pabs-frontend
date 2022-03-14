import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleInputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  .error {
    position: absolute;
  }

  @media only screen and (min-width: 700px) and (max-width: 1279px) {
    row-gap: 17px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    row-gap: 30px;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    row-gap: 45px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    row-gap: 80px;
  }
  @media only screen and (min-width: 7680px) {
    row-gap: 130px;
  }
`;

export const InputGroup = ({ children, className }) => (
  <StyleInputGroup className={`input-group ${className}`}>
    {children}
  </StyleInputGroup>
);

InputGroup.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};
