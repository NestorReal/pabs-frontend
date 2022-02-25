import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;

  .formulario {
    position: fixed;
    width: 47.188%;
    height: 66.667%;
    margin-left: 13.594%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 4px;
    label {
      color: #113255;
    }
    .form {
      width: 52.413%;
      .input {
        margin-top: 17%;
        input {
          position: fixed;
          height: 4.167%;
          width: 24.609%;
          border-radius: 10px;
          border: 1px solid #113255;
          box-sizing: border-box;
          padding-left: 1%;
        }
      }
      .select {
        margin-top: 17%;
        select {
          position: fixed;
          height: 4.167%;
          width: 24.609%;
          background: #ffffff;
          border: 1px solid #113255;
          box-sizing: border-box;
          border-radius: 10px;
          color: #113255;
          padding-left: 1%;
        }
      }
      .containerButton {
        margin-top: 15%;
        width: 80%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .formulario {
      margin-left: 0px;
      width: 90%;
      display: block;
      .form {
        .input {
          width: 85%;
          input {
            width: 85%;
          }
        }
        .select {
          width: 85%;
          select {
            width: 85%;
          }
        }
        .containerButton {
          margin-top: 30%;
          width: 106%;
        }
      }
    }
  }
  @media only screen and (max-width: 959px) {
    .formulario {
      .form {
        .containerButton {
          margin-top: 20%;
          width: 110%;
        }
        .input {
          input {
            border-radius: 5px;
            border: 1px solid #113255;
          }
        }
        .select {
          select {
            border: 1px solid #113255;
            border-radius: 5px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    .formulario {
      .form {
        .input {
          input {
            border-radius: 5px;
            border: 1px solid #113255;
          }
        }
        .select {
          select {
            border: 1px solid #113255;
            border-radius: 5px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .formulario {
      .form {
        .input {
          input {
            border-radius: 10px;
            border: 2px solid #113255;
          }
        }
        .select {
          select {
            border: 2px solid #113255;
            border-radius: 10px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .formulario {
      .form {
        .input {
          input {
            border-radius: 15px;
            border: 3px solid #113255;
          }
        }
        .select {
          select {
            border: 3px solid #113255;
            border-radius: 15px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .formulario {
      .form {
        .input {
          input {
            border-radius: 25px;
            border: 5px solid #113255;
          }
        }
        .select {
          select {
            border: 5px solid #113255;
            border-radius: 25px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    .formulario {
      .form {
        .input {
          input {
            border-radius: 45px;
            border: 10px solid #113255;
          }
        }
        .select {
          select {
            border: 10px solid #113255;
            border-radius: 45px;
          }
        }
      }
    }
  }
`;
