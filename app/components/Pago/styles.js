import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: 491px;
  padding: 4.7% 11.75% 3.52% 6%;
  .referencia {
    padding: 31px 19px 20px 24px;
    width: 516px;
    height: 354px;
    color: #113255;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    label {
      font-weight: bold;
    }
    button {
      float: right;
      margin-top: 75px;
      width: 110px;
      height: 36px;
      border-radius: 5px;
    }
  }
  .containerPlans {
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
  }
  .containerCodigo {
    button {
      width: 110px;
      height: 36px;
      border-radius: 5px;
    }
    input {
      border: 1px solid #113255;
      height: 30px;
      width: 315px;
      border-radius: 3px;
    }
  }
  .titlePlan {
    padding: 32px 0 15px 0px;
    width: 100%;
    border-bottom: 1px solid #113255;
    text-align: center;
  }
  .monto {
    height: 77px;
    border-bottom: 1px solid #113255;
    margin-bottom: 30px;
    color: #113255;
  }
  .buttons {
    margin-top: 14px;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    min-width: 1280px;
    min-height: 491px;
    padding: 4.7% 11.75% 3.52% 6%;
    .referencia {
      padding: 31px 19px 20px 24px;
      width: 516px;
      height: 354px;
      color: #113255;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      label {
        font-weight: bold;
      }
      button {
        float: right;
        margin-top: 75px;
        width: 110px;
        height: 36px;
        border-radius: 5px;
      }
    }
    .containerPlans {
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
    }
    .containerCodigo {
      button {
        width: 110px;
        height: 36px;
        border-radius: 5px;
      }
      input {
        border: 1px solid #113255;
        height: 30px;
        width: 315px;
        border-radius: 3px;
      }
    }
    .titlePlan {
      padding: 32px 0 15px 0px;
      width: 100%;
      border-bottom: 1px solid #113255;
      text-align: center;
    }
    .monto {
      height: 77px;
      border-bottom: 1px solid #113255;
      margin-bottom: 30px;
      color: #113255;
    }
    .buttons {
      margin-top: 14px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    /*min-height: 1080px;*/
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    /*min-height: 1440px;*/
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    /*min-height: 2160px;*/
  }
  @media only screen and (min-width: 7680px) {
    /*min-height: 4320px;*/
  }
`;
