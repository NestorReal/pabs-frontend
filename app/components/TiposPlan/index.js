/**
 *
 * TiposPlan
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Card from '../Card';
import imagenPlan from '../../images/plan-italia.png';
import ImageModal from '../ImageModal';

function TiposPlan(props) {
  const [modalState, setModalState] = useState({
    visible: false,
    img: imagenPlan,
  });

  const showModal = img => {
    setModalState({
      visible: true,
      img,
    });
  };

  const hideModal = () => {
    setModalState({
      ...modalState,
      visible: false,
    });
  };

  const getTipoPlan = tipo => {
    // eslint-disable-next-line react/prop-types
    props.getTipoPlan(tipo);
    // eslint-disable-next-line react/prop-types
    props.getStep(2);
  };
  const colors = ['Red', 'Yellow', 'Blue'];
  let dataPlan = [];
  if (Object.keys(props.dataPlans).length !== 0) {
    dataPlan = props.dataPlans.map((plan, id) => (
      <Card
        color={colors[id]}
        title={`$ ${plan.cost} MNX`}
        subTitle="Planes"
        titleCard={plan.name}
        text={plan.features.map(feature => feature.description)}
        onClick={() => getTipoPlan({ name: plan.name, amount: plan.cost })}
        onClickDetail={() => showModal(imagenPlan)}
      />
    ));
  }
  return (
    <>
      <ImageModal
        display={modalState.visible}
        img={imagenPlan}
        alt="Imagen del plan"
        onClose={() => hideModal()}
      />
      <Container planesLength={dataPlan.length}>{dataPlan}</Container>
    </>
  );
}

TiposPlan.propTypes = {
  dataPlans: PropTypes.object,
};

export default TiposPlan;
