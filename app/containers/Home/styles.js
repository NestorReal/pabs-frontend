import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  overflow: hidden;
  .containerModal {
    height: 690px;
    width: 1360px;
    border-radius: 0px;
    position: relative;
    background: rgba(0, 92, 158, 0.8);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      height: 472px;
      width: 927px;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
      z-index: 20;
    }
    .texModal {
      width: 100%;
      text-align: center;
      height: 55px;
      margin-top: 136px;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 55px;
      color: #317f43;
    }

    .containerButtonModal {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 83px;
      button {
        height: 50px;
        width: 220px;
        left: 0px;
        top: 0px;
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
        color: #fff;
        margin-right: 14px !important;
      }
      .secondary {
        background: transparent;
        color: #00539c;
      }
    }
  }
  .sesion {
    position: absolute;
    width: 125px;
    height: 32px;
    left: 1106px;
    top: 41px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #000000;
    background: transparent;
    border: none;
  }
  .logo {
    height: 66.7021255493164px;
    width: 110px;
    left: 30px;
    top: 20px;
    border-radius: 0px;
    position: absolute;
  }
  .title {
    height: 55px;
    width: 100%;
    top: 25px;
    border-radius: nullpx;
    position: absolute;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    color: #005c9e;
  }
  .referencia {
    position: absolute;
    left: 71px;
    top: 116px;
    width: 516px;
    height: 472px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .containerInput {
    position: absolute;
    top: 71px;
    left: 72px;
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
      margin-right: 9px;
      margin-top: 14px;
      button {
        background: transparent;
        border: none;
      }
    }
  }
  .monto {
    position: absolute;
    left: 73px;
    top: 176px;

    .text {
      font-family: Arial;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: left;
      margin-left: 7px;
    }

    input {
      height: 30px;
      width: 150px;
      border-radius: 3px;
      margin: 0 10px;
    }
  }
  .containerButton {
    position: absolute;
    top: 274px;
    left: 142px;
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
      margin-bottom: 30px;
    }
    .secondary {
      background: #ffffff;
      color: #00539c;
    }
  }
  .containerPlan {
    position: absolute;
    width: 447px;
    left: 667px;
    top: 144px;
    .titlePlan {
      width: 100%;
      text-align: center;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 38px;
      color: #005c9e;
      border-bottom: solid 0.5px #000;
      position: relative;
      top: 0px;
      padding-bottom: 15px;
      margin-bottom: 45px;
    }
    table {
      width: 100%;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 38px;
      letter-spacing: 0.375px;
      color: #000000;
      tr {
        border-bottom: solid 0.5px #000;
      }
    }
  }
  .containerMetodo {
    margin-top: 25px;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #005c9e;

    button {
      background: transparent;
      height: 50px;
      width: 220px;
      border-radius: 15px;
    }

    .paypal {
      border: 1px solid #0d3883;
      margin-right: 7px;
    }

    .zelle {
      border: 1px solid #6d1ed4;
    }
  }
  .footer {
    position: absolute;
    width: 100%;
    height: 90px;
    left: 0px;
    top: 630px;
    background: #005c9e;
  }

  @media only screen and (max-width: 600px) {
    overflow: visible;
    .containerModal {
      height: 170%;
      width: 100%;
      .modal {
        height: 472px;
        width: 95%;
      }
      .containerButtonModal {
        width: 97%;
        margin-left: 1.5%;
        button {
          height: 50px;
          width: 220px;
          left: 0px;
          top: 0px;
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
          color: #fff;
          margin-right: 14px !important;
        }
        .secondary {
          background: transparent;
          color: #00539c;
        }
      }
    }
    .sesion {
      width: 100%;
      left: 0px;
      top: 24px;
      text-align: right;
    }
    .logo {
      height: 50px;
      width: 75px;
      left: 24px;
      top: 20px;
    }
    .title {
      height: 48px;
      width: 100%;
      top: 90px;
      font-size: 40px;
      line-height: 48px;
    }
    .referencia {
      left: 0px;
      top: 145px;
      width: 97%;
      height: 305px;
      margin-left: 1.5%;
    }
    .containerInput {
      position: absolute;
      top: 10px;
      left: 5%;
      width: 90%;
    }
    .input {
      height: 55px;
      width: auto;
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
        margin-right: 9px;
        margin-top: 14px;
        button {
          background: transparent;
          border: none;
        }
      }
    }
    .monto {
      position: absolute;
      left: 114px;
      top: 115px;
    }
    .containerButton {
      position: absolute;
      top: 220px;
      left: 0px;
      width: 97%;
      margin-left: 1.5%;
      display: flex;
      justify-content: center;
      button {
        line-height: 16px;
        font-size: 16px;
        height: 45px;
        width: 160px;
      }
    }
    .containerPlan {
      position: absolute;
      width: 97%;
      left: 0px;
      top: 500px;
      margin-left: 1.5%;
    }
    .containerMetodo {
      button {
        width: 170px;
        margin-top: 10px;
      }
    }
    .footer {
      width: 100%;
      top: 950px;
    }
  }
`;
