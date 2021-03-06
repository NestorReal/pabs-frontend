/**
 *
 * select
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Styleselect = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100% !important' : '360px')};
  height: ${props => props.height};
  .fontFontello {
    font-family: 'fontello' !important;
  }
  label {
    color: #113255;
  }
  .select {
    height: ${({ autoHeight }) => (autoHeight ? 'auto !important' : '')};
    width: 100%;
    height: 55px;
    border: 1px solid #113255;
    box-sizing: border-box;
    border-radius: ${({ Rounded }) => (Rounded ? '10px' : '3px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    color: #113255;
    font-size: 25px;
    margin-right: 3%;
    button {
      border: none;
      background: transparent;
      color: #113255;
      font-size: 25px;
    }
  }
  select {
    height: 95%;
    width: 95%;
    border-radius: ${({ Rounded }) => (Rounded ? '10px' : '3px')};
    border: none;
    padding: 10px;
    background: transparent;
  }
  select:focus {
    outline: none;
  }
  @media only screen and (max-width: 959px) {
    width: 264px;
    /* height: 40px; */
    .select {
      height: 40px;
      border: 1px solid #113255;
      border-radius: ${({ Rounded }) => (Rounded ? '5px' : '2px')};
    }
    select {
      border-radius: ${({ Rounded }) => (Rounded ? '5px' : '2px')};
    }
    .icon {
      font-size: 25px;
      button {
        font-size: 25px;
      }
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    width: 270px;
    /* height: 73px; */
    .select {
      height: 42px;
      border-radius: ${({ Rounded }) => (Rounded ? '5px' : '2px')};
    }
    .icon {
      font-size: 23px;
      button {
        font-size: 23px;
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    width: 545px;
    /* height: 146px; */
    .select {
      height: 70px;
      border: 2px solid #113255;
      border-radius: ${({ Rounded }) => (Rounded ? '15px' : '3px')};
    }
    select {
      border-radius: ${({ Rounded }) => (Rounded ? '15px' : '3px')};
    }
    .icon {
      font-size: 35px;
      button {
        font-size: 35px;
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    width: 720px;
    /* height: 183px; */
    .select {
      height: 90px;
      border: 3px solid #113255;
      border-radius: ${({ Rounded }) => (Rounded ? '20px' : '5px')};
    }
    select {
      border-radius: ${({ Rounded }) => (Rounded ? '20px' : '5px')};
      padding-left: 20px;
    }
    .icon {
      font-size: 60px;
      button {
        font-size: 60px;
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    width: 1075px;
    /* height: 278px; */
    .select {
      height: 135px;
      border: 5px solid #113255;
      border-radius: ${({ Rounded }) => (Rounded ? '30px' : '7px')};
    }
    select {
      border-radius: ${({ Rounded }) => (Rounded ? '30px' : '7px')};
      padding-left: 25px;
    }
    .icon {
      font-size: 85px;
      button {
        font-size: 85px;
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    width: 2146px;
    /* height: 575px; */
    .select {
      height: 270px;
      border: 10px solid #113255;
      border-radius: ${({ Rounded }) => (Rounded ? '80px' : '15px')};
    }
    select {
      border-radius: ${({ Rounded }) => (Rounded ? '80px' : '15px')};
      padding-left: 50px;
    }
    .icon {
      font-size: 180px;
      button {
        font-size: 180px;
      }
    }
  }
`;

function Select({
  label,
  name,
  value,
  onChange,
  children,
  fullWidth = true,
  Rounded = true,
  autoHeight = false,
}) {
  return (
    <Styleselect
      fullWidth={fullWidth}
      Rounded={Rounded}
      autoHeight={autoHeight}
    >
      <label>{label}</label>
      <div className="select">
        <select value={value} onChange={onChange} name={name} id={name}>
          {children}
        </select>
      </div>
    </Styleselect>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.element,
  fullWidth: PropTypes.bool,
  Rounded: PropTypes.bool,
  autoHeight: PropTypes.bool,
};

export default Select;
