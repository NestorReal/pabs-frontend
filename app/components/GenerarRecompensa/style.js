import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 0 15px 24px;

  .formulario {
    position: fixed;
    width: 40%;
    margin-left: 13.594%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 3%;
    label {
      color: #113255;
    }
    .form {
      width: 60%;
      .input,
      .select {
        border-radius: 3px;
        height: unset;
      }
      input,
      select {
        padding-top: 2%;
        padding-bottom: 2%;
      }
      .containerButton {
        gap: 5%;
        justify-content: center;
        margin-top: 15%;
        width: 80%;
        display: flex;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .formulario {
      margin-left: 0px;
      width: 90%;
      display: block;
      .form {
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 959px) {
    .formulario {
      left: 50%;
      margin: 0;
      transform: translateX(-50%);
      width: 70%;
      .form {
        .containerButton {
          margin-top: 20%;
          width: 110%;
        }
        .input,
        .select {
          border-radius: 2px;
        }
      }
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    .formulario {
      .form {
        .input,
        .select {
          border-radius: 2px;
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .formulario {
      .form {
        .input,
        .select {
          border-radius: 3px;
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .formulario {
      .form {
        .input,
        .select {
          border-radius: 5px;
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .formulario {
      .form {
        .input,
        .select {
          border-radius: 7px;
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    .formulario {
      .form {
        .input,
        .select {
          border-radius: 15px;
        }
      }
    }
  }
`;
