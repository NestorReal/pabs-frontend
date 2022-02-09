/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { CgLoadbarDoc } from 'react-icons/cg';
import { v4 as uuidv4 } from 'uuid';
import CardStyle from './style';

function Card({
  title,
  subTitle,
  titleCard,
  text,
  onClickDetail,
  onClick,
  color,
}) {
  return (
    <CardStyle>
      <div className={`tag tag${color}`}>
        <div className="title">
          <label>{title}</label>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
      </div>
      <div className={`triangulo triangulo${color}`} />
      <div className={`card card${color}`}>
        <div className={`titleCard text${color}`}>
          <label>{titleCard}</label>
        </div>
        <div className="containerText">
          {text.map(item => (
            <div key={uuidv4()} className="center spacing">
              <div className="icon">
                <h5>
                  <CgLoadbarDoc />
                </h5>
              </div>
              <div className="text">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="center">
          <div className="containerButton">
            <button type="button" className="primary" onClick={onClickDetail}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Detalles</label>
            </button>
            <button type="button" className="secondary" onClick={onClick}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Comprar</label>
            </button>
          </div>
        </div>
      </div>
    </CardStyle>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleCard: PropTypes.string,
  text: PropTypes.array,
  onClickDetail: PropTypes.func,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Card;
