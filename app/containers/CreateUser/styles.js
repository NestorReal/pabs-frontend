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
  }
  .title {
    position: absolute;
    width: 308px;
    height: 55px;
    top: 67px;
    right: 280px;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    color: #00539c;
  }
  .formulario {
    position: absolute;
    /*width: 360px;*/
    right: 48px;
    top: 166px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .divInput {
      display: block;
    }
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
      margin-right: 9px;
      button {
        background: transparent;
        border: none;
      }
    }
  }
  .containerButton {
    position: absolute;
    top: 488px;
    right: 317px;
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
  .containerTerminos {
    position: absolute;
    top: 409px;
    right: 229px;
  }
  .check {
    display: block;
    position: relative;
    padding-left: 18px;
    margin-bottom: 12px;
    line-height: 38px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 38px;
    color: #005c9e;
  }

  .check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 12px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #005c9e;
  }

  /* On mouse-over, add a grey background color */
  .check:hover input ~ .checkmark {
    background: #e5e5e5;
  }

  /* When the checkbox is checked, add a blue background */
  .check input:checked ~ .checkmark {
    background-color: #005c9e;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .check input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .check .checkmark:after {
    left: 4px;
    top: 1px;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(37deg);
    -ms-transform: rotate(37deg);
    transform: rotate(37deg);
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    overflow: visible;
    .respons {
      margin-right: 0px !important;
    }
    .respons2 {
      margin-top: 0px !important;
    }
    .logo {
      height: 67.28154754638672px;
      width: 110px;
      left: 280px;
      top: 20px;
      border-radius: 0px;
      position: absolute;
    }
    .portada {
      height: 0px;
      width: 0px;
      display: none;
    }
    .formularioContainer {
      position: relative;
      width: 100%;
      height: 100%;
      float: none;
    }
    .title {
      width: 100%;
      right: 0px;
      left: 0px;
      text-align: center;
    }
    .formulario {
      position: absolute;
      width: 100%;
      right: 0px;
      left: 0px;
      top: 166px;
      div {
        display: block;
      }
      .divInput {
        display: block;
      }
    }
    .footer {
      width: 100%;
      top: 660px;
    }
    .input {
      width: 90%;
      margin-left: 5%;
      input {
        width: auto;
      }
      .icon {
        margin-top: 12px;
      }
    }
    .containerButton {
      position: absolute;
      top: 582px;
      right: 0px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .containerTerminos {
      position: absolute;
      top: 537px;
      right: 17px;
    }
  }
`;
