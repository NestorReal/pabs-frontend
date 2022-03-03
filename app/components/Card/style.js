import styled from 'styled-components';

const CardStyle = styled.div`
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
  .textRed {
    color: #ed1c24;
  }
  .tagYellow {
    background: #ffcc06;
  }
  .textYellow {
    color: #ffcc06;
  }
  .tagBlue {
    background: #00539c;
  }
  .textBlue {
    color: #00539c;
  }
  .tag {
    width: 126px;
    height: 104px;
    border-radius: 0px 15px 15px 15px;
    float: right;
    padding-top: 40px;
    position: relative;
    z-index: 1;
    .title {
      width: 100%;
      color: #ffffff;
      text-align: center;
      label {
        font-weight: bold;
      }
    }
    .subTitle {
      color: #ffffff;
      text-align: center;
      p {
        margin: 0px;
      }
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
    position: relative;

    .titleCard {
      height: 48px;
      label {
        font-weight: bold;
      }
    }
    .containerText {
      margin-top: 20px;
    }

    .details-item{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .text{
        display: flex;
        align-items: center;
      }
    }

    }
    .spacing {
      margin-bottom: 10px;
    }
    .text {
      width: 173px;
      height: 32px;
      color: #113255;
      p {
        margin: 0px;
      }
    }
    .icon {
      color: #113255;
      h5 {
        margin: 0px;
      }
    }
    .containerButton {
      width: 110px;
      margin: 10px auto 0 auto;
      bottom: 25px;
      left: 0;
      position: absolute;
      right: 0;

      button {
        height: 36px;
        width: 110px;
        border-radius: 5px;
        border: 1px solid #00539c;
        label {
          font-weight: bold;
        }
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
  @media only screen and (max-width: 775px) {
    display: flow-root;
    margin-bottom: 20px;
    width: 255px;

    .card{
      .containerButton{
        bottom: 15px;
      }
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    width: 202px;
    .triangulo {
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-bottom: 7px solid transparent;
      transform: rotate(90deg);
      float: right;
    }
    .trianguloRed {
      border-right: 7px solid #740202;
      border-top: 7px solid #740202;
    }
    .trianguloYellow {
      border-right: 7px solid #b18e03;
      border-top: 7px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 7px solid #113255;
      border-top: 7px solid #113255;
    }
    .tag {
      width: 110px;
      height: 75px;
      border-radius: 0px 15px 15px 15px;
      float: right;
      padding-top: 22px;
    }
    .card {
      width: 190px;
      height: 220px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 15px;
      margin-top: 14px;
      padding: 10px 15px 15px 15px;
      .titleCard {
        height: 48px;
      }
      .containerText {
        margin-top: 10px;
      }
      .spacing {
        margin-bottom: 6px;
      }
      .text {
        width: auto;
        height: 25px;
      }
      .icon {
        font-size: 22px;
      }
      .containerButton {
        bottom: 20px;
        width: 80px;
        margin-top: 10px;
        button {
          height: 27px;
          width: 80px;
          border-radius: 5px;
          border: 1px solid #00539c;
        }
        .primary {
          margin-bottom: 7px;
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    width: 370px;
    .triangulo {
      width: 0;
      height: 0;
      border-left: 21px solid transparent;
      border-bottom: 21px solid transparent;
      transform: rotate(90deg);
      float: right;
    }
    .trianguloRed {
      border-right: 21px solid #740202;
      border-top: 21px solid #740202;
    }
    .trianguloYellow {
      border-right: 21px solid #b18e03;
      border-top: 21px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 21px solid #113255;
      border-top: 21px solid #113255;
    }
    .tag {
      width: 206px;
      height: 150px;
      border-radius: 0px 15px 15px 15px;
      float: right;
      padding-top: 60px;
    }
    .card {
      width: 360px;
      height: 440px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 15px;
      margin-top: 42px;
      padding: 21px 22px 15px 15px;
      .titleCard {
        height: 70px;
      }
      .containerText {
        margin-top: 30px;
      }
      .spacing {
        margin-bottom: 20px;
      }
      .text {
        width: 275px;
        height: 50px;
      }
      .containerButton {
        bottom: 30px;
        width: 180px;
        margin-top: 20px;
        button {
          height: 50px;
          width: 180px;
          border-radius: 5px;
          border: 1px solid #00539c;
          label {
            font-weight: bold;
          }
        }
        .primary {
          color: #00539c;
          background: transparent;
          margin-bottom: 14px;
        }
        .secondary {
          color: #fff;
          background: #00539c;
        }
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    width: 520px;
    .triangulo {
      border-left: 31px solid transparent;
      border-bottom: 31px solid transparent;
    }
    .trianguloRed {
      border-right: 31px solid #740202;
      border-top: 31px solid #740202;
    }
    .trianguloYellow {
      border-right: 31px solid #b18e03;
      border-top: 31px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 31px solid #113255;
      border-top: 31px solid #113255;
    }
    .tag {
      width: 280px;
      height: 225px;
      border-radius: 0px 25px 25px 25px;
      float: right;
      padding-top: 90px;
    }
    .card {
      width: 480px;
      height: 610px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 30px;
      margin-top: 60px;
      padding: 35px 22px 15px 35px;
      .titleCard {
        height: 80px;
      }
      .containerText {
        margin-top: 70px;
      }
      .spacing {
        margin-bottom: 20px;
      }
      .text {
        width: 380px;
        height: 70px;
      }
      .containerButton {
        bottom: 40px;
        width: 220px;
        margin-top: 40px;
        button {
          height: 65px;
          width: 220px;
          border-radius: 15px;
          border: 3px solid #00539c;
        }
        .primary {
          margin-bottom: 25px;
        }
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    width: 800px;
    .triangulo {
      border-left: 41px solid transparent;
      border-bottom: 41px solid transparent;
    }
    .trianguloRed {
      border-right: 41px solid #740202;
      border-top: 41px solid #740202;
    }
    .trianguloYellow {
      border-right: 41px solid #b18e03;
      border-top: 41px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 41px solid #113255;
      border-top: 41px solid #113255;
    }
    .tag {
      width: 440px;
      height: 310px;
      border-radius: 0px 25px 25px 25px;
      float: right;
      padding-top: 130px;
    }
    .card {
      width: 750px;
      height: 950px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 30px;
      margin-top: 80px;
      padding: 50px 22px 15px 35px;
      .titleCard {
        height: 140px;
      }
      .containerText {
        margin-top: 70px;
      }
      .spacing {
        margin-bottom: 50px;
      }
      .text {
        width: 580px;
        height: 88px;
      }
      .containerButton {
        bottom: 50px;
        width: 355px;
        margin-top: 40px;
        button {
          height: 110px;
          width: 355px;
          border-radius: 15px;
          border: 3px solid #00539c;
        }
        .primary {
          margin-bottom: 25px;
        }
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    width: 1600px;
    .triangulo {
      border-left: 80px solid transparent;
      border-bottom: 80px solid transparent;
    }
    .trianguloRed {
      border-right: 80px solid #740202;
      border-top: 80px solid #740202;
    }
    .trianguloYellow {
      border-right: 80px solid #b18e03;
      border-top: 80px solid #b18e03;
    }
    .trianguloBlue {
      border-right: 80px solid #113255;
      border-top: 80px solid #113255;
    }
    .tag {
      width: 855px;
      height: 570px;
      border-radius: 0px 80px 80px 80px;
      float: right;
      padding-top: 240px;
    }
    .card {
      width: 1520px;
      height: 1740px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.08);
      border-radius: 100px;
      margin-top: 160px;
      padding: 100px 22px 15px 80px;
      .titleCard {
        height: 140px;
      }
      .containerText {
        margin-top: 230px;
        margin-left: -90px;
      }
      .spacing {
        margin-bottom: 50px;
      }
      .text {
        width: 1111px;
        height: 200px;
      }
      .containerButton {
        width: 730px;
        margin-top: 70px;
        button {
          height: 220px;
          width: 730px;
          border-radius: 15px;
          border: 10px solid #00539c;
        }
        .primary {
          margin-bottom: 70px;
        }
      }
    }
  }
`;

export default CardStyle;
