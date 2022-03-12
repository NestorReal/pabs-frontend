/**
 *
 * Modal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModaStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000;
  display: ${props => (props.display ? 'flex' : 'none')};
  background: rgba(0, 92, 158, 0.8);
  justify-content: center;
  align-items: center;
  .ContainerModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 72.422%;
    height: 65.556%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-align: center;
    color: #00539c;
    padding: 6% 4%;
    .text {
      width: 60.937%;
      margin: 0 auto;
    }
    h2 {
      font-weight: normal;
    }
    .title {
      color: #317f43;
    }
  }

  @media only screen and (max-width: 959px) {
    padding: 10% 0;

    .ContainerModal {
      width: 85%;
      height: unset;
      .text {
        width: 85%;
      }
    }
  }

  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    min-width: 945px;
    min-height: 540px;
    .ContainerModal {
      min-width: 684.375px;
      min-height: 354px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    min-width: 1920px;
    min-height: 1080px;
    .ContainerModal {
      min-width: 1390.5px;
      min-height: 708px;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    min-width: 2560px;
    min-height: 1440px;
    .ContainerModal {
      min-width: 1854px;
      min-height: 944px;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    min-width: 3840px;
    min-height: 2160px;
    .ContainerModal {
      min-width: 2781px;
      min-height: 1416px;
    }
  }
  @media only screen and (min-width: 7680px) {
    min-width: 7680px;
    min-height: 4320px;
    .ContainerModal {
      min-width: 5562px;
      min-height: 2832px;
    }
  }
`;

function Modal({ display, title, text, subtitle, children }) {
  return (
    <ModaStyle display={display}>
      <div className="ContainerModal">
        <h1 className="title">{title}</h1>
        {text && (
          <>
            <div className="text">
              <h2>{text}</h2>
            </div>
          </>
        )}
        {subtitle && <h1>{subtitle}</h1>}
        {children}
      </div>
    </ModaStyle>
  );
}

Modal.propTypes = {
  display: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
