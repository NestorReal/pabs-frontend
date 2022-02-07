/**
 *
 * Steppers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SteppersStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #113255;
  .steppers {
    width: 74.744%;
    margin-top: 2.639%;
    .line {
      width: 40%;
      height: 1px;
      background: #005c9e;
    }
    .circle {
      width: 37px;
      height: 37px;
      border-radius: 50%;
      border: 1px solid #005c9e;
      text-align: center;
      color: #ffffff;
      label {
        font-weight: bold;
      }
    }
  }
  @media only screen and (max-width: 915px) {
    left: 0px;
    width: 100%;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    .steppers {
      .line {
        height: 1px;
      }
      .circle {
        width: 30px;
        height: 30px;
        border: 1px solid #005c9e;
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .steppers {
      .line {
        height: 2px;
      }
      .circle {
        width: 60px;
        height: 60px;
        border: 2px solid #005c9e;
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .steppers {
      .line {
        height: 3px;
      }
      .circle {
        width: 80px;
        height: 80px;
        border: 3px solid #005c9e;
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .steppers {
      .line {
        height: 5px;
      }
      .circle {
        width: 120px;
        height: 120px;
        border: 5px solid #005c9e;
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    .steppers {
      .line {
        height: 15px;
      }
      .circle {
        width: 235px;
        height: 235px;
        border: 15px solid #005c9e;
      }
    }
  }
`;

function Steppers({ option }) {
  return (
    <>
      <SteppersStyle>
        <div className="steppers spaceBetween">
          <div
            className="circle center"
            style={option === 1 ? { background: '#00539C' } : null}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>1</label>
          </div>
          <div className="line" />
          <div
            className="circle center"
            style={option === 2 ? { background: '#00539C' } : null}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>2</label>
          </div>
          <div className="line" />
          <div
            className="circle center"
            style={option === 3 ? { background: '#00539C' } : null}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>3</label>
          </div>
        </div>
      </SteppersStyle>
      <SteppersStyle>
        <div
          className="steppers spaceBetween"
          style={{ width: '80%', marginTop: '0.5%' }}
        >
          <label htmlFor="Tipos de plan">
            {option === 1 ? 'Tipos de plan' : ''}
          </label>
          <label htmlFor="Datos">{option === 2 ? 'Datos' : ''}</label>
          <label htmlFor="Pagar" style={{ marginRight: '2.5%' }}>
            {option === 3 ? 'Pagar' : ''}
          </label>
        </div>
      </SteppersStyle>
    </>
  );
}

Steppers.propTypes = {
  option: PropTypes.number,
};

export default Steppers;
