import styled from 'styled-components';

const MenuStyle = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  min-height: 720px;
  width: 12.813%;
  .bienvenida,
  .hidden {
    display: none;
  }
  .logo {
    width: 66%;
    height: 10%;
    margin-left: 18%;
    margin-top: 12%;
  }
  .menu {
    position: absolute;
    top: 20%;
    height: 63%;
    width: 100%;
    button {
      width: 92%;
      height: 31px;
      border-radius: 10px;
      margin-left: 3px;
      background: #fff;
      border: none;
      text-align: center;
      color: #767676;
      i {
        margin-right: 16px;
      }
    }
    .activate {
      color: #113255;
      background: #e8f3fd;
      label {
        font-weight: bold;
      }
    }
    .containerOptions {
      width: 100%;
      margin-top: 10px;
      button {
        width: 100%;
        height: 38px;
        color: #c0c0c0;
        text-align: left;
        border-radius: 0px;
        p {
          margin: 0px;
        }
      }
      .activateOption {
        color: #113255;
        p {
          border-right: solid 2px #00539c;
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    width: 150px;
    left: -150px;
    transition: 1s;
    .bienvenida {
      display: block;
      width: 100%;
      text-align: center;
    }
    .hidden {
      width: 100%;
      display: block;
      position: absolute;
      left: 30%;
      z-index: 100;
      button {
        float: right;
        border: none;
        background: transparent;
      }
    }
    .menu {
      button {
        i {
          margin-right: 7px;
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .menu {
      button {
        height: 45px;
        border-radius: 12px;
        margin-left: 3px;
      }
      .containerOptions {
        margin-top: 12px;
        button {
          height: 50px;
        }
        .activateOption {
          p {
            border-right: solid 3px #00539c;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .menu {
      button {
        height: 60px;
        border-radius: 20px;
        margin-left: 3px;
      }
      .containerOptions {
        margin-top: 20px;
        button {
          height: 70px;
        }
        .activateOption {
          p {
            border-right: solid 4px #00539c;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .menu {
      button {
        height: 90px;
        border-radius: 40px;
        margin-left: 3px;
      }
      .containerOptions {
        margin-top: 40px;
        button {
          height: 100px;
        }
        .activateOption {
          p {
            border-right: solid 5px #00539c;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    .menu {
      button {
        height: 220px;
        border-radius: 70px;
        margin-left: 3px;
      }
      .containerOptions {
        margin-top: 70px;
        button {
          height: 200px;
        }
        .activateOption {
          p {
            border-right: solid 10px #00539c;
          }
        }
      }
    }
  }
`;

export default MenuStyle;
