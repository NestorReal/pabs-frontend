/**
 *
 * select
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Styleselect = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  .fontFontello {
    font-family: 'fontello' !important;
  }
  label {
    color: #113255;
  }
  .select {
    width: 100%;
    height: 55px;
    border: 1px solid #113255;
    box-sizing: border-box;
    border-radius: 10px;
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
    border-radius: 10px;
    border: none;
    padding: 10px;
    background: transparent;
  }
  select:focus {
    outline: none;
  }
  @media only screen and (max-width: 700) {
    height: 65px;
  }
  @media only screen and (min-width: 700px) and (max-width: 959px) {
    width: 264px;
    height: 75px;
    .select {
      height: 40px;
      border: 1px solid #113255;
      border-radius: 5px;
    }
    select {
      border-radius: 15px;
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
    height: 73px;
    .select {
      height: 42px;
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
    height: 146px;
    .select {
      height: 87px;
      border: 2px solid #113255;
      border-radius: 15px;
    }
    select {
      border-radius: 15px;
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
    height: 183px;
    .select {
      height: 110px;
      border: 3px solid #113255;
      border-radius: 20px;
    }
    select {
      border-radius: 20px;
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
    height: 278px;
    .select {
      height: 160px;
      border: 5px solid #113255;
      border-radius: 30px;
    }
    select {
      border-radius: 30px;
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
    height: 575px;
    .select {
      height: 330px;
      border: 10px solid #113255;
      border-radius: 80px;
    }
    select {
      border-radius: 80px;
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

function Select({ label, name, value, onChange, children }) {
  return (
    <Styleselect>
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
};

export default Select;
