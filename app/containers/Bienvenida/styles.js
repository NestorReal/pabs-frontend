import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .logo {
    height: 66.7021255493164px;
    width: 110px;
    left: 30px;
    top: 20px;
    border-radius: 0px;
    position: absolute;
  }
  .title {
    position: absolute;
    width: 950px;
    height: 110px;
    left: 212px;
    top: 30px;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    color: #005c9e;
  }
  .containerPaper {
    position: absolute;
    left: 92px;
    top: 158px;
  }
  .paper {
    width: 1095px;
    height: 234px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .text {
      font-family: Arial;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: left;
      color: #113255;
      margin-left: 17px;
    }
  }
  .titulo1 {
    width: 100%;
    margin-top: 7px;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #00539c;
  }
  .titulo2 {
    font-family: Arial;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: center;
    color: #00539c;
    margin-bottom: 10px;
  }
  .containerInfo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitulo {
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #113255;
    margin-bottom: 15px;
  }
  .footer {
    width: 1354px;
    height: 90px;
    background: #005c9e;
    margin-top: 23px;
    position: absolute;
    left: 0px;
    top: 670px;
  }
  .button {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.375px;
    color: #ffffff;
    background: #034681;
    border: none;
    height: 36px;
    width: 110px;
    left: 0px;
    top: 0px;
    border-radius: 5px;
    float: right;
    margin-right: 26px;
    margin-top: -27px;
  }
`;
