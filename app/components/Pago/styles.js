import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1280px;
  min-height: 491px;
  padding: 4.7% 11.75% 3.52% 6%;
  img {
    height: 80%;
  }
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
  @media only screen and (max-width: 959px) {
    min-width: 300px;
    padding: 0px;
    padding-left: 5%;
    .referencia {
      padding: 20px 10px 20px 10px;
      margin-bottom: 50px;
    }
    .referencia,
    .containerPlans {
      width: 90%;
    }
    .res {
      display: block;
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
        margin-top: 37px;
      }
    }
    .containerPlans {
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
      padding: 25px 0 15px 0px;
      width: 100%;
      border-bottom: 1px solid #113255;
      text-align: center;
    }
    .monto {
      height: 55px;
      border-bottom: 1px solid #113255;
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
      padding: 31px 19px 20px 24px;
      width: 670px;
      height: 520px;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      button {
        margin-top: 175px;
        font-size: 30px;
      }
    }
    .containerPlans {
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
      padding: 50px 0 25px 0px;
      width: 100%;
      border-bottom: 2px solid #113255;
      text-align: center;
    }
    .monto {
      height: 100px;
      border-bottom: 2px solid #113255;
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
        margin-top: 233px;
      }
    }
    .containerPlans {
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
      padding: 60px 0 30px 0px;
      width: 100%;
      border-bottom: 3px solid #113255;
      text-align: center;
    }
    .monto {
      height: 120px;
      border-bottom: 3px solid #113255;
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
        margin-top: 380px;
      }
    }
    .containerPlans {
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
      padding: 100px 0 60px 0px;
      width: 100%;
      border-bottom: 4px solid #113255;
      text-align: center;
    }
    .monto {
      height: 160px;
      border-bottom: 4px solid #113255;
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
      padding: 110px;
      width: 2870px;
      height: 2000px;
      box-shadow: 50px 50px 130px rgba(0, 0, 0, 0.25);
      border-radius: 120px;
      button {
        margin-top: 920px;
      }
    }
    .containerPlans {
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
      padding: 200px 0 100px 0px;
      width: 100%;
      border-bottom: 10px solid #113255;
      text-align: center;
    }
    .monto {
      height: 320px;
      border-bottom: 10px solid #113255;
      margin-bottom: 120px;
    }
    .buttons {
      margin-top: 80px;
    }
  }
`;
