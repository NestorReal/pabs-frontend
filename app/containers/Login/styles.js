import styled from 'styled-components';
// import asaterisco from '../../images/asterisk-svgrepo-com.svg';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 14.583%;
    color: #00539c;
  }
  .reset {
    border: none;
    background: transparent;
    position: absolute;
    width: auto;
    height: 38px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #00539c;
  }
  .formulario {
    position: absolute;
    top: 28%;
  }
  .containerButton {
    position: absolute;
    top: 65.972%;
    width: 55%;
    height: 8.1%;
    display: flex;
    justify-content: space-between;
  }
  p {
    position: absolute;
    top: 60%;
    left: 55%;
    color: #113255;
  }
  /* Movil */
  @media only screen and (max-width: 600px) {
    .containerButton {
      width: 100%;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 700px) {
    overflow: hidden;
    h1 {
      margin-top: 10%;
    }
    .formulario {
      top: 20%;
    }
    .containerButton {
      width: 65%;
    }
  }
  @media only screen and (min-width: 701px) and (max-width: 800px) {
    overflow: hidden;
    h1 {
      margin-top: 10%;
    }
    .formulario {
      top: 20%;
    }
    .reset {
      top: 93%;
      font-size: 20px;
    }
    p {
      top: 55%;
    }
    .containerButton {
      width: 88%;
      top: 60%;
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    p {
      top: 61%;
      left: 55.5%;
    }
    .reset {
      font-size: 12px;
    }
    .containerButton {
      width: 55%;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .reset {
      font-size: 20px;
    }
    p {
      font-size: 25px;
      left: 53%;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .reset {
      font-size: 30px;
    }
    p {
      font-size: 35px;
      left: 53%;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .reset {
      font-size: 50px;
      line-height: 90px;
    }
    p {
      font-size: 60px;
      left: 51.5%;
    }
  }
  @media only screen and (min-width: 7680px) {
    .reset {
      font-size: 100px;
      line-height: 150px;
    }
    p {
      font-size: 130px;
      left: 50.4%;
    }
  }
`;
