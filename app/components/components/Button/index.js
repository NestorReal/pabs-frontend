/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => (props.primary ? '#00539C' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#00539C')};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius}px;
  border: 1px solid #00539c;
  @media only screen and (max-width: 360px) {
    width: 155px;
    height: 40px;
    font-size: 16px;
  }
  @media only screen and (min-width: 700px) and (max-width: 800px) {
    width: 300px;
    height: 77px;
    font-size: 36px;
    border: 2px solid #00539c;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    width: 165px;
    height: 39px;
    font-size: 17px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    width: 330px;
    height: 77px;
    font-size: 36px;
    border: 2px solid #00539c;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    width: 440px;
    height: 103px;
    font-size: 45px;
    border: 3px solid #00539c;
    border-radius: 40px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    width: 660px;
    height: 157px;
    font-size: 70px;
    border: 5px solid #00539c;
    border-radius: 30px;
  }
  @media only screen and (min-width: 7680px) {
    width: 1320px;
    height: 300px;
    font-size: 150px;
    border: 10px solid #00539c;
    border-radius: 80px;
  }
`;

function Button({
  children,
  onClick,
  primary,
  width = '220px',
  height = '50px',
  borderRadius = 15,
}) {
  return (
    <StyleButton
      primary={primary}
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </StyleButton>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.number,
};

export default Button;
