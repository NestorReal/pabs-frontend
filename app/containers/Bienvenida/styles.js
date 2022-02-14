import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .logo {
    height: 9.167%;
    width: 8.594%;
    left: 2.344%;
    top: 2.778%;
    position: absolute;
  }
  .title {
    width: 74.219%;
    height: 15.278%;
    margin-left: 16.563%;
    margin-bottom: 2.5%;
    text-align: center;
    color: #005c9e;
  }

  .paper {
    margin-left: 7.188%;
    margin-bottom: 3.194%;
    padding: 0.56% 2.031% 1.222% 1.328%;
    width: 85.547%;
    height: 32.5%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    .text {
      height: 15%;
      margin-bottom: 0.3%;
    }
    h5 {
      margin: 0px;
      margin-bottom: 1%;
    }
    h2 {
      font-weight: normal;
      margin: 0px;
    }
    label {
      color: #113255;
      font-weight: bold;
      margin-bottom: 15%;
    }
  }
  .titulo1 {
    width: 100%;
    text-align: center;
    color: #00539c;
  }
  .titulo2 {
    text-align: center;
    color: #00539c;
    margin-bottom: 1%;
  }
  .footer {
    width: 100%;
    height: 12.5%;
    background: #005c9e;
  }
  button {
    float: right;
    margin-top: -3%;
    width: 110px;
    height: 36px;
    border-radius: 5px;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    min-width: 945px;
    min-height: 540px;
    button {
      width: 90px;
      height: 30px;
      border-radius: 5px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    min-width: 1920px;
    min-height: 1080px;
    button {
      width: 150px;
      height: 50px;
      border-radius: 5px;
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    min-width: 2560px;
    min-height: 1440px;
    button {
      width: 220px;
      height: 65px;
      border-radius: 10px;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    min-width: 3840px;
    min-height: 2160px;
    button {
      width: 330px;
      height: 100px;
      border-radius: 20px;
    }
  }
  @media only screen and (min-width: 7680px) {
    min-width: 7680px;
    min-height: 4320px;
    button {
      width: 700px;
      height: 200px;
      border-radius: 40px;
    }
  }
`;