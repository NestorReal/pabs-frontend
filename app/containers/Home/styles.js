import styled from 'styled-components';

export const Header = styled.div`
  .main-title {
    width: 100%;
    text-align: center;
    font-weight: normal;
    line-height: 55px;
    color: #005c9e;
  }

  .logo {
    width: 7%;
    left: 3%;
    top: 3%;
    border-radius: 0px;
    position: absolute;
  }

  .sesion {
    position: absolute;
    /* width: 7%; */
    /* height: 32px; */
    right: 3%;
    top: 4%;
    /* font-size: 16px; */
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #000000;
    background: transparent;
    border: none;
  }

  @media only screen and (max-width: 600px) {
    .main-title {
      height: 48px;
      width: 100%;
      margin-top: 100px;
    }

    .logo {
      height: 50px;
      width: 75px;
      /* left: 24px;
      top: 20px; */
    }

    .sesion {
      /* width: 100%;
      left: 0px;
      top: 24px;
      text-align: right; */
    }
  }

  @media only screen and (max-width: 1279px) {
    .main-title {
      margin-bottom: 0;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #fff;
  padding-bottom: 10%;

  .label {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    line-height: 38px;
    color: #113255;
    margin-left: 6px;
  }

  .footer {
    position: fixed;
    width: 100%;
    height: 10%;
    left: 0px;
    bottom: 0;
    background: #005c9e;
  }

  @media only screen and (max-width: 1919px) {
    .footer {
      height: 5%;
    }
  }
`;

export const PagoContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: 491px;
  padding: 4.7% 10% 3.52% 10%;

  .res {
    align-items: flex-start;
    column-gap: 7%;
    display: flex;
    justify-content: center;
  }

  .referencia {
    padding: 31px 19px 20px 24px;
    width: 516px;
    height: 400px;
    color: #113255;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: relative;
    label {
      display: block;
      font-weight: bold;
    }
    label.representante-pago {
      margin-bottom: 12%;
    }

    .containerButton {
      left: 0;
      bottom: 5%;
      display: flex;
      gap: 1vw;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 100%;

      button {
        border: 1px solid #00539c;
        width: 70%;
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

    .containerInput {
      margin-bottom: 1%;
      width: 100%;
      input {
        /* width: 80%; */
      }
    }

    /* .input {
       height: 55px; 
       width: 100%;
      border-radius: 10px;
      border: solid 1px #113255; 

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
    } */
    .monto {
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

      /* input {
        height: 30px;
        width: 150px;
        border-radius: 3px;
        margin: 0 10px;
      } */
    }
  }
  .containerPlan {
    width: 447px;
    height: 354px;
    margin-bottom: 32px;
    label {
      color: #113255;
    }
    h5 {
      color: #005c9e;
      margin: 0px;
    }

    .titlePlan {
      width: 100%;
      text-align: center;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      /* font-size: 24px; */
      /* line-height: 38px; */
      color: #005c9e;
      border-bottom: solid 0.5px #000;
      position: relative;
      top: 0px;
      padding-bottom: 3%;
      margin-bottom: 5%;
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
        /* height: 50px;
        width: 220px; */
        /* border-radius: 15px; */

        img {
          height: 80%;
        }
      }

      .buttons {
        gap: 5%;
      }

      .paypal {
        border: 1px solid #0d3883;
        margin-right: 7px;
      }

      .zelle {
        border: 1px solid #6d1ed4;
      }
    }
  }

  @media only screen and (max-width: 959px) {
    min-width: 300px;
    padding: 10% 7%;
    .referencia {
      height: 375px;
      padding: 40px 20px 60px 20px;
      margin-bottom: 50px;
    }
    .referencia,
    .containerPlan {
      width: 100%;
    }
    .res {
      display: block;
    }
    .containerCodigo {
      input {
        flex-grow: 1;
      }
      button {
        white-space: nowrap;
      }
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    min-width: 945px;
    min-height: 433px;
    padding: 4.7% 6.7% 3.52% 6%;
    .referencia {
      padding: 31px 19px 20px 24px;
      width: 380px;
      height: 310px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      button {
        /* margin-top: 37px; */
      }
    }
    .containerPlan {
      width: 350px;
      height: 354px;
      margin-bottom: 0px;
    }
    .containerCodigo {
      input {
        border: 1px solid #113255;
        height: 25px;
        width: 245px;
        border-radius: 3px;
      }
    }
    .titlePlan {
      /* padding: 25px 0 15px 0px; */
      width: 100%;
      border-bottom: 1px solid #113255;
      text-align: center;
    }
    .monto {
      height: 55px;
      /* border-bottom: 1px solid #113255; */
      margin-bottom: 30px;
      color: #113255;
    }
    .buttons {
      margin-top: 14px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    min-width: 1920px;
    min-height: 680px;
    padding: 4.7% 6.7% 3.52% 6%;
    .referencia {
      padding: 40px 30px;
      width: 670px;
      height: 520px;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      button {
        /* margin-top: 175px; */
        /* font-size: 30px; */
      }
    }
    .containerPlan {
      width: 725px;
      height: 520px;
      margin-bottom: 0px;
    }
    .containerCodigo {
      button {
        font-size: 30px;
      }
      input {
        border: 2px solid #113255;
        height: 45px;
        width: 510px;
        border-radius: 5px;
      }
    }
    .titlePlan {
      /* padding: 50px 0 25px 0px; */
      width: 100%;
      border-bottom: 2px solid #113255;
      text-align: center;
    }
    .monto {
      height: 100px;
      /* border-bottom: 2px solid #113255; */
      margin-bottom: 40px;
      color: #113255;
    }
    .buttons {
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    min-width: 2560px;
    min-height: 875px;
    padding: 4.7% 6.7% 3.52% 6%;
    .referencia {
      padding: 50px 40px 40px 40px;
      width: 930px;
      height: 660px;
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);
      border-radius: 35px;
      button {
        /* margin-top: 233px; */
      }
    }
    .containerPlan {
      width: 888px;
      height: 660px;
      margin-bottom: 0px;
    }
    .containerCodigo {
      input {
        border: 3px solid #113255;
        height: 55px;
        width: 625px;
        border-radius: 10px;
      }
    }
    .titlePlan {
      /* padding: 60px 0 30px 0px; */
      width: 100%;
      border-bottom: 3px solid #113255;
      text-align: center;
    }
    .monto {
      height: 120px;
      /* border-bottom: 3px solid #113255; */
      margin-bottom: 50px;
    }
    .buttons {
      margin-top: 30px;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    min-width: 3840px;
    min-height: 1320px;
    padding: 4.7% 6.7% 3.52% 6%;
    .referencia {
      padding: 60px;
      width: 1400px;
      height: 1000px;
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);
      border-radius: 35px;
      button {
        /* margin-top: 380px; */
      }
    }
    .containerPlan {
      width: 1400px;
      height: 1000px;
      margin-bottom: 0px;
    }
    .containerCodigo {
      input {
        border: 4px solid #113255;
        height: 80px;
        width: 1000px;
        border-radius: 20px;
      }
    }
    .titlePlan {
      /* padding: 100px 0 60px 0px; */
      width: 100%;
      border-bottom: 4px solid #113255;
      text-align: center;
    }
    .monto {
      height: 160px;
      /* border-bottom: 4px solid #113255; */
      margin-bottom: 60px;
    }
    .buttons {
      margin-top: 40px;
    }
  }
  @media only screen and (min-width: 7680px) {
    min-width: 7680px;
    min-height: 2650px;
    padding: 4.7% 6.7% 3.52% 6%;
    .referencia {
      padding: 160px 120px;
      width: 2870px;
      height: 2000px;
      box-shadow: 50px 50px 130px rgba(0, 0, 0, 0.25);
      border-radius: 120px;
      button {
        /* margin-top: 920px; */
      }
    }
    .containerPlan {
      width: 2800px;
      height: 2000px;
      margin-bottom: 0px;
    }
    .containerCodigo {
      input {
        border: 10px solid #113255;
        height: 180px;
        width: 2000px;
        border-radius: 40px;
      }
    }
    .titlePlan {
      /* padding: 200px 0 100px 0px; */
      width: 100%;
      border-bottom: 10px solid #113255;
      text-align: center;
    }
    .monto {
      height: 320px;
      /* border-bottom: 10px solid #113255; */
      margin-bottom: 120px;
    }
    .buttons {
      margin-top: 80px;
    }
  }
`;

export const ModalContainer = styled.div`
  .containerButtonModal {
    width: 100%;
    gap: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 83px;
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
`;
