import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-x: hidden;
  .containerMenu {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 164px;
    .logo {
      width: 110px;
      height: 66.7px;
      margin-left: 30px;
      margin-top: 20px;
    }
    .menu {
      margin-left: 6px;
      margin-top: 60px;
      button {
        width: 149px;
        height: 31px;
        border-radius: 10px;
        background: #fff;
        border: none;
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.375px;
        text-align: center;
        color: #767676;
      }
      .activate {
        color: #113255;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        background: #e8f3fd;
      }
      .containerOptions {
        display: none;
        button {
          width: 161px;
          height: 16px;
          font-family: Arial;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          letter-spacing: 0.375px;
          color: #c0c0c0;
          text-align: left;
          border-radius: 0px;
          margin: 12px 0px;
        }
        .activateOption {
          color: #113255;
          border-right: solid 2px #00539c;
        }
      }
    }
  }
  .buttonSalir {
    font-size: 34px;
    color: #034681;
    border: none;
    background: transparent;
    position: absolute;
    left: 65px;
    bottom: 72px;
  }
  .containerChildren {
    position: absolute;
    left: 164px;
    top: 0px;
    .bodyChildren {
      position: absolute;
      top: 108px;
      width: 1202px;
    }
    .header {
      width: 1202px;
      height: 108px;
      position: absolute;
      top: 0px;
      .title {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
        color: #005c9e;
        width: 719px;
        padding-top: 53px;
        padding-left: 33px;
      }
      .sesion {
        width: 483px;
        position: absolute;
        right: 0px;
        top: 0px;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-right: 30px;
        .text {
          font-family: Arial;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          letter-spacing: 0.375px;
          color: #113255;
        }
        .subtext {
          font-family: Arial;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 30px;
          letter-spacing: 0.375px;
          color: #000000;
        }
        .sesionButton {
          background: transparent;
          border: none;
          font-family: Arial;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 38px;
          letter-spacing: 0.375px;
          color: #000000;
          margin-top: -36px;
        }
      }
    }
  }
`;
