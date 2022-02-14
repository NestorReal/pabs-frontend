/**
 *
 * TiposPlan
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from './styles';
import Card from '../Card';

function TiposPlan(props) {
  const getTipoPlan = tipo => {
    // eslint-disable-next-line react/prop-types
    props.getTipoPlan(tipo);
    // eslint-disable-next-line react/prop-types
    props.getStep(2);
  };

  return (
    <Container>
      <Card
        color="Red"
        title="$ 10,000 MNX"
        subTitle="Planes"
        titleCard="Cremación directa"
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]}
        onClick={() =>
          getTipoPlan({ name: 'Cremación directa', amount: '$ 10,000 MNX' })
        }
      />
      <Card
        color="Yellow"
        title="$ 20,000 MNX"
        subTitle="Planes"
        titleCard="Estándar"
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]}
        onClick={() =>
          getTipoPlan({ name: 'Estándar', amount: '$ 20,000 MNX' })
        }
      />
      <Card
        color="Blue"
        title="$ 30,000 MNX"
        subTitle="Planes"
        titleCard="Premium"
        text={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ]}
        onClick={() => getTipoPlan({ name: 'Premium', amount: '$ 10,000 MNX' })}
      />
    </Container>
  );
}

TiposPlan.propTypes = {};

export default TiposPlan;
