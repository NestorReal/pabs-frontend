/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './style.css';
const StyleInput = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? '100% !important' : '360px')};
  .fontFontello {
    font-family: 'fontello' !important;
  }
  label {
    color: #113255;
  }
  .input {
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
  input {
    height: 95%;
    width: 90%;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }
  @media only screen and (max-width: 959px) {
    width: 300px;
    .input {
      height: 40px;
      border: 1px solid #113255;
      border-radius: 5px;
    }
    input {
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
    .input {
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
    .input {
      height: 70px;
      border: 2px solid #113255;
      border-radius: 15px;
    }
    input {
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
    .input {
      height: 90px;
      border: 3px solid #113255;
      border-radius: 20px;
    }
    input {
      border-radius: 20px;
      padding-left: 20px;
    }
    .icon {
      font-size: 50px;
      button {
        font-size: 60px;
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    width: 1075px;
    .input {
      height: 135px;
      border: 5px solid #113255;
      border-radius: 30px;
    }
    input {
      border-radius: 30px;
      padding-left: 25px;
    }
    .icon {
      font-size: 70px;
      button {
        font-size: 85px;
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    width: 2146px;
    .input {
      height: 270px;
      border: 10px solid #113255;
      border-radius: 80px;
    }
    input {
      border-radius: 80px;
      padding-left: 50px;
    }
    .icon {
      font-size: 150px;
      button {
        font-size: 180px;
      }
    }
  }
`;

function Input({
  label,
  name,
  placeholder,
  children,
  value,
  onChange,
  type = 'text',
  className,
  fullWidth = true,
}) {
  return (
    <StyleInput fullWidth={fullWidth}>
      <label>{label}</label>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          name={name}
          id={name}
        />
        <div className="icon">{children}</div>
      </div>
    </StyleInput>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.element,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Input;
