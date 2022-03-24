/**
 *
 * ModalStyle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalStyle = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;
  display: ${props => (props.display ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;

  .ContainerModal {
    width: 72.422%;
    height: 80%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-align: center;
    color: #00539c;
    position: relative;
    overflow-y: scroll;
    overflow: overlay;
    img {
      width: 100%;
    }
  }

  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 1.5%;
    right: 2%;
  }

  .ContainerModal::-webkit-scrollbar {
    display: block;
    width: 15px;
    @media only screen and (max-width: 959px) {
      width: 5px;
    }
  }

  .ContainerModal::-webkit-scrollbar-button {
    display: none;
  }

  .ContainerModal::-webkit-scrollbar-track {
    background-color: #00000000;
  }

  .ContainerModal::-webkit-scrollbar-track-piece {
    background-color: #00000000;
  }

  .ContainerModal::-webkit-scrollbar-thumb {
    background-color: rgb(138, 138, 138);
    /* border: 1px solid #ffffff40; */
    border-radius: 24px;
  }

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    overflow: auto;
    padding: 10% 0;

    .ContainerModal {
      height: unset;
      width: 90%;
    }

    .close-btn {
      top: 0;
      right: 0;
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

function ImageModal({ display, img, alt, onClose }) {
  return (
    <ModalStyle display={display}>
      <div className="ContainerModal">
        <img src={img} alt={alt} />
        <button
          className="close-btn label"
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
    </ModalStyle>
  );
}

ImageModal.propTypes = {
  display: PropTypes.bool,
  img: PropTypes.any,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

export default ImageModal;
