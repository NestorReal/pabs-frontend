import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  button, button label {
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
  .label,
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

  td, th, label, .label, input, option, select {
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
  /* @media only screen and (min-width: 700px) and (max-width: 900px) {
    h1 {
      font-size: 66px !important;
    }
    h2 {
      font-size: 64px !important;
    }
    td, th, label, input, option, select {
      font-size: 30px !important;
    }
    p {
      font-size: 22px !important;
    }
    h5 {
      font-size: 35px !important;
    }
  } */
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 28px;
    }
    td, th, label, .label, input, option, select {
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
    td, th, label, .label, input, option, select {
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
      font-size: 60px;
    }
    h2 {
      font-size: 45px;
    }
    td, th, label, .label, input, option, select {
      font-size: 20px;
    }
    p {
      font-size: 17px;
    }
    h5 {
      font-size: 27px;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    h1 {
      font-size: 75px;
    }
    h2 {
      font-size: 60px;
    }
    td, th, label, .label, input, option, select {
      font-size: 27px;
    }
    p {
      font-size: 23px;
    }
    h5 {
      font-size: 38px;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    h1 {
      font-size: 130px;
    }
    h2 {
      font-size: 85px;
    }
    td, th, label, .label, input, option, select {
      font-size: 42px;
    }
    p {
      font-size: 34px;
    }
    h5 {
      font-size: 67px;
    }
  }
  @media only screen and (min-width: 7680px) {
    h1 {
      font-size: 245px;
    }
    h2 {
      font-size: 176px;
    }
    td, th, label, .label, input, option, select {
      font-size: 75px;
    }
    p {
      font-size: 68px;
    }
    h5 {
      font-size: 150px;
    }
  }
  /*@media only screen  and (min-width: 960px) and (max-width: 1279px) and (min-height : 540px) and (max-height: 719px) {
    min-height: 540px;
    min-width: 960px;
  }
  @media only screen and (min-width: 1280px) and (max-width: 1919px) and (min-height: 720px) and (max-height: 1079px) {
    min-height: 720px;
    min-width: 1280px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) and (min-height: 1080px) and (max-height: 1439px) {
    min-height: 1080px;
    min-width: 1920px;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) and (min-height: 1440px) and (max-height: 2159px) {
    min-height: 1440px;
    min-width: 2560px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) and (min-height: 2160px) and (max-height: 4319px) {
    min-height: 2160px;
    min-width: 3840px;
  }
  @media only screen and (min-width: 7680px) and (min-height: 4320px) {
    min-height: 4320px;
    min-width: 7680px;
  }*/
`;

export default GlobalStyle;
