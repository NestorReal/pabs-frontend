import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  button {
    cursor: pointer;
  }
  .error {
    color: red !important;
    margin: 0px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spaceBetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }
  input:focus {
    outline: none;
  }

  body,
  body.fontLoaded,
  p,
  label,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arial !important;
    line-height: 1.5em;
  }
  .Arial {
    font-family: Arial !important;
  }

  td, th, label, input {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.375px;
  }

  p {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: normal;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
    line-height: normal;
  }

  h5 {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: normal;
    letter-spacing: 0.375px;
  }
  @media only screen and (min-width: 700px) and (max-width: 900px) {
    h1 {
      font-size: 66px !important;
    }
    h2 {
      font-size: 64px !important;
    }
    td, th, label, input {
      font-size: 30px !important;
    }
    p {
      font-size: 22px !important;
    }
    h5 {
      font-size: 35px !important;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 28px;
    }
    td, th, label, input {
      font-size: 15px;
    }
    p {
      font-size: 11px;
    }
    h5 {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
    td, th, label, input {
      font-size: 14px;
    }
    p {
      font-size: 11px;
    }
    h5 {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    h1 {
      font-size: 80px;
    }
    h2 {
      font-size: 60px;
    }
    td, th, label, input {
      font-size: 27px;
    }
    p {
      font-size: 22px;
    }
    h5 {
      font-size: 35px;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    h1 {
      font-size: 100px;
    }
    h2 {
      font-size: 80px;
    }
    td, th, label, input {
      font-size: 38px;
    }
    p {
      font-size: 30px;
    }
    h5 {
      font-size: 50px;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    h1 {
      font-size: 170px;
    }
    h2 {
      font-size: 115px;
    }
    td, th, label, input {
      font-size: 60px;
    }
    p {
      font-size: 45px;
    }
    h5 {
      font-size: 90px;
    }
  }
  @media only screen and (min-width: 7680px) {
    h1 {
      font-size: 325px;
    }
    h2 {
      font-size: 235px;
    }
    td, th, label, input {
      font-size: 120px;
    }
    p {
      font-size: 90px;
    }
    h5 {
      font-size: 200px;
    }
  }
`;

export default GlobalStyle;
