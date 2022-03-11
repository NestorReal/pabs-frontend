/**
 *
 * Check
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleCheck = styled.label`
  display: block;
  position: relative;
  padding-left: 18px;
  line-height: 38px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #005c9e;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 12px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #005c9e;
    margin-top: -2px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background: #e5e5e5;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #005c9e;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 4px;
    top: 1px;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(37deg);
    -ms-transform: rotate(37deg);
    transform: rotate(37deg);
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    .checkmark {
      height: 12px;
      width: 12px;
      margin-top: 1px;
    }
    .checkmark:after {
      left: 3px;
      top: 0px;
      width: 5px;
      height: 8px;
      border-width: 0 2px 2px 0;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    padding-left: 30px;

    .checkmark {
      height: 22px;
      width: 22px;
      margin-top: -5px;
    }
    .checkmark:after {
      left: 6px;
      top: 0px;
      width: 8px;
      height: 15px;
      border-width: 0 4px 4px 0;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    padding-left: 55px;

    .checkmark {
      height: 40px;
      width: 40px;
      margin-top: -14px;
      border: 3px solid #005c9e;
    }
    .checkmark:after {
      left: 11px;
      top: 0px;
      width: 13px;
      height: 27px;
      border-width: 0 7px 7px 0;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    padding-left: 64px;

    .checkmark {
      height: 50px;
      width: 50px;
      margin-top: -20px;
      border: 5px solid #005c9e;
    }
    .checkmark:after {
      left: 12px;
      top: -1px;
      width: 20px;
      height: 34px;
      border-width: 0 10px 10px 0;
    }
  }
  @media only screen and (min-width: 7680px) {
    padding-left: 150px;

    .checkmark {
      height: 130px;
      width: 130px;
      margin-top: -50px;
      border: 10px solid #005c9e;
    }
    .checkmark:after {
      left: 37px;
      top: 0px;
      width: 50px;
      height: 95px;
      border-width: 0 25px 25px 0;
    }
  }
`;

function Check({ label, onChange }) {
  return (
    <StyleCheck>
      {label}
      <input type="checkbox" onChange={onChange} />
      <span className="checkmark" />
    </StyleCheck>
  );
}

Check.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Check;
