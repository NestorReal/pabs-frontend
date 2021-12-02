import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cardContainer {
    width: 239px;
    .triangulo {
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-bottom: 11px solid transparent;
      transform: rotate(90deg);
      float: right;
    }
    .trianguloRed {
      border-right: 11px solid #740202;
      border-top: 11px solid #740202;
    }
    .trianguloYellow {
      border-right: 11px solid #b18e03;
      border-top: 11px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 11px solid #113255;
      border-top: 11px solid #113255;
    }
    .tagRed {
      background: #ed1c24;
    }
    .tagYellow {
      background: #ffcc06;
    }
    .tagBlue {
      background: #00539c;
    }
    .tag {
      width: 126px;
      height: 104px;
      border-radius: 0px 15px 15px 15px;
      float: right;
      padding: 40px 11px 0px 12px;
      .title {
        width: 100%;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;
        text-align: center;
      }
      .subTitle {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
        text-align: center;
      }
    }
    .cardRed {
      background: #fed6d6;
    }
    .cardYellow {
      background: #fff7d7;
    }
    .cardBlue {
      background: #e8f3fd;
    }
    .card {
      width: 239px;
      height: 300px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 15px;
      margin-top: 22px;
      padding: 21px 22px 15px 15px;
      .titleCard {
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
        color: #ed1c24;
      }
      .containerText {
        margin-top: 50px;
      }
      .center {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .text {
        width: 173px;
        height: 32px;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #113255;
      }
      .icon {
        font-size: 22px;
        color: #113255;
      }
      .containerButton {
        width: 110px;
        margin-top: 44px;
        button {
          height: 36px;
          width: 110px;
          border-radius: 5px;
          border: 1px solid #00539c;
          font-family: Arial;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          letter-spacing: 0.375px;
        }
        .primary {
          color: #00539c;
          background: transparent;
          margin-bottom: 7px;
        }
        .secondary {
          color: #fff;
          background: #00539c;
        }
      }
    }
  }
`;
