/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const backgroundColors = {
  primary: '#00539C',
  secondary: '#fff',
  succes: '#317F43',
  cancel: '#ED1C24',
};

const StyleButton = styled.button`
  width: ${props => (props.size === 'large' ? '220px' : '110px')};
  height: ${props => (props.size === 'large' ? '50px' : '36px')};
  background: ${props => backgroundColors[props.variant]};
  color: ${props => (props.variant !== 'secondary' ? '#fff' : '#00539C')};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => (props.size === 'large' ? '15px' : '5px')};
  border: solid 1px;
  border-color: ${props =>
    props.variant !== 'secondary'
      ? backgroundColors[props.variant]
      : '#00539c'};
  @media only screen and (max-width: 959px) {
    width: ${props => (props.size === 'large' ? '155px' : '85px')};
    height: ${props => (props.size === 'large' ? '40px' : '30px')};
    font-size: 16px;
    border-radius: 5px;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    width: ${props => (props.size === 'large' ? '165px' : '90px')};
    height: ${props => (props.size === 'large' ? '39px' : '30px')};
    font-size: 17px;
    border-radius: ${props => (props.size === 'large' ? '10px' : '5px')};
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    width: ${props => (props.size === 'large' ? '330px' : '150px')};
    height: ${props => (props.size === 'large' ? '77px' : '50px')};
    font-size: 30px;
    border-width: 2px;
    ${props => (props.size === 'large' ? '15px' : '5px')}
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    width: ${props => (props.size === 'large' ? '440px' : '220px')};
    height: ${props => (props.size === 'large' ? '103px' : '65px')};
    font-size: 45px;
    border-width: 3px;
    border-radius: ${props => (props.size === 'large' ? '40px' : '10px')};
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    width: ${props => (props.size === 'large' ? '660px' : '330px')};
    height: ${props => (props.size === 'large' ? '157px' : '100px')};
    font-size: 70px;
    border-width: 5px;
    border-radius: ${props => (props.size === 'large' ? '30px' : '20px')};
  }
  @media only screen and (min-width: 7680px) {
    width: ${props => (props.size === 'large' ? '1320px' : '700px')};
    height: ${props => (props.size === 'large' ? '300px' : '200px')};
    font-size: 125px;
    border-width: 10p;
    border-radius: ${props => (props.size === 'large' ? '80px' : '40px')};
  }
`;

function Button({
  children,
  onClick,
  size = 'large',
  variant,
  type = 'button',
}) {
  return (
    <StyleButton variant={variant} onClick={onClick} size={size} type={type}>
      {children}
    </StyleButton>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
