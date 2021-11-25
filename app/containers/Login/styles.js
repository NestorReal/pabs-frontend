import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  .logo {
    height: 67.28154754638672px;
    width: 110px;
    left: 280px;
    top: 20px;
    border-radius: 0px;
    position: absolute;
  }
  .portada {
    height: 730px;
    width: 507px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    position: absolute;
  }
  .formularioContainer {
    position: relative;
    width: 853px;
    height: 100%;
    float: right;
    background: #fff;

    p {
      position: absolute;
      top: 440px;
      right: 225px;
      font-family: Arial;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: left;
      color: #000000;
      margin: 0px;
    }
  }
  .title {
    position: absolute;
    width: 308px;
    height: 55px;
    left: 268.34px;
    top: 105px;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    color: #00539c;
  }
  .formulario {
    position: absolute;
    width: 360px;
    left: 247.34px;
    top: 205px;
  }
  .footer {
    position: absolute;
    height: 90px;
    width: 853px;
    left: 0px;
    top: 630px;
    border-radius: 0px;
    background: #00539c;
  }
  .label {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 38px;
    color: #113255;
    margin-left: 6px;
  }
  .input {
    height: 55px;
    width: 360px;
    border-radius: 10px;
    border: solid 1px #113255;
    input {
      border: none;
      height: 32px;
      width: 302px;
      margin: 10px;
    }
    input:focus {
      outline: none;
    }
    .icon {
      width: 25px;
      height: 25px;
      float: right;
      margin-top: 15px;
      margin-right: 9px;
      button {
        background: transparent;
        border: none;
        padding: 0px;
      }
    }
  }
  .containerButton {
    position: absolute;
    top: 475px;
    right: 203px;
    button {
      height: 50px;
      width: 220px;
      border-radius: 15px;
      border: 1px solid #00539c;
      font-family: Arial;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: center;
    }
    .primary {
      background: #00539c;
      color: #ffffff;
    }
    .secondary {
      background: #ffffff;
      color: #00539c;
    }
  }
  @media only screen and (max-width: 600px) {
    overflow: visible;
    width: 100%;
    height: 100%;
    position: absolute;
    .portada {
      height: 0px;
      width: 0px;
      diplay: none;
    }
    .formularioContainer {
      position: relative;
      width: 100%;
      height: 100%;
      float: none;
      p {
        position: absolute;
        width: 100%;
        top: 440px;
        right: 0px;
        text-align: right;
        padding-right: 17px;
      }
    }
    .title {
      position: absolute;
      width: 100%;
      height: 55px;
      left: 0px;
      font-size: 43px;
      line-height: 50px;
      text-align: center;
    }
    .formulario {
      position: absolute;
      width: 100%;
      left: 0px;
      top: 205px;
    }
    .footer {
      position: absolute;
      height: 90px;
      width: 100%;
      left: 0px;
      top: 630px;
      border-radius: 0px;
      background: #00539c;
    }
    .input {
      height: 48pxpx;
      width: 90%;
      margin-left: 5%;
      input {
        border: none;
        height: 32px;
        width: auto;
        margin: 10px;
      }
      input:focus {
        outline: none;
      }
      .icon {
        width: 25px;
        height: 25px;
        float: right;
        margin-top: 15px;
        margin-right: 9px;
        button {
          background: transparent;
          border: none;
          padding: 0px;
        }
      }
    }
    .containerButton {
      position: absolute;
      top: 475px;
      display: flex;
      left: 0px;
      width: 100%;
      justify-content: center;
      button {
        height: 50px;
        width: 160px;
      }
    }
  }
`;
