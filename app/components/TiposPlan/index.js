/**
 *
 * TiposPlan
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Card from '../Card';
import imagenPlan1 from '../../images/paquete1.png';
import imagenPlan2 from '../../images/paquete2.png';
import imagenPlan3 from '../../images/paquete3.png';

import ImageModal from '../ImageModal';
function TiposPlan(props) {
  const [modalState, setModalState] = useState({
    visible: false,
    img: imagenPlan3,
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
  const colors = ['Red', 'Yellow', 'Blue', 'Red', 'Yellow', 'Blue'];
  const imagesPlan = [
    imagenPlan3,
    imagenPlan2,
    imagenPlan1,
    imagenPlan3,
    imagenPlan2,
    imagenPlan1,
  ];
  let dataPlan = [];
  if (Object.keys(props.dataPlans).length !== 0) {
    dataPlan = props.dataPlans.map((plan, id) => (
      <Card
        color={colors[id]}
        title={`$ ${Intl.NumberFormat('en-IN').format(plan.cost)} MNX`}
        subTitle="Planes"
        titleCard={plan.name}
        text={plan.features.map(feature => feature.description)}
        onClick={() => getTipoPlan({ name: plan.name, amount: plan.cost })}
        onClickDetail={() => showModal(imagesPlan[id])}
      />
    ));
  }
  return (
    <>
      <ImageModal
        display={modalState.visible}
        img={modalState.img}
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
