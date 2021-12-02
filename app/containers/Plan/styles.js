import styled from 'styled-components';
import portada from '../../images/portada1.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  .portada {
    position: fixed;
    width: 405px;
    height: 720px;
    left: 0px;
    top: 0px;
    background: url(${portada});
    background-repeat: no-repeat;
    background-size: 405px 720px;
  }
  .containerPlan {
    position: absolute;
    left: 405px;
    top: 0px;
    width: 949px;
    padding: 36px 49px 52px 63px;
  }
  .titulo {
    width: 100%;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    color: #00539c;
  }
  .containerSteppers {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .steppers {
      width: 654px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 19px;
      .line {
        width: 271.5px;
        height: 1px;
        background: #005c9e;
      }
      .circle {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        border: 1px solid #005c9e;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 0.375px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .containerFormulario {
    width: 100%;
    margin-top: 84px;
  }
`;
