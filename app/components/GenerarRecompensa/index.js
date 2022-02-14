/**
 *
 * GenerarRecompensa
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import Button from '../components/Button';

const validate = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  features: Yup.string().required('Este campo es requerido'),
  companyId: Yup.string().required('Este campo es requerido'),
  cost: Yup.number('Porfavor ingrese un valor numerico')
    .required('Este campo es requerido')
    .positive('Ingrese un número positivo'),
});

function GenerarRecompensa({ getCompanies, onClick, data }) {
  const formik = useFormik({
    initialValues: {
      name: data ? data.name : '',
      cost: data ? data.cost : 0,
      features: data ? data.features : '',
      companyId: data ? data.companyId : '',
      // eslint-disable-next-line no-underscore-dangle
      id: data ? data._id : '',
    },
    validationSchema: validate,
    onSubmit: values => onClick(values),
  });
  return (
    <Container>
      <div className="formulario">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="select" style={{ marginTop: '15px' }}>
            <label htmlFor="companyId">Selecciona empresa</label>
            <br />
            <select
              name="companyId"
              id="companyId"
              onChange={formik.handleChange}
              value={formik.values.companyId}
            >
              <option>Seleccionar</option>
              {getCompanies.map(item => (
                // eslint-disable-next-line no-underscore-dangle
                <option key={uuidv4()} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            {formik.touched.companyId && formik.errors.companyId ? (
              <p className="error">{formik.errors.companyId}</p>
            ) : null}
          </div>
          <div className="input">
            <label htmlFor="name">Nombre del plan</label>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                disabled={!!data}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="error">{formik.errors.name}</p>
              ) : null}
            </div>
          </div>
          <div className="input" style={{ marginTop: '32px' }}>
            <label htmlFor="cost">Precio en pesos</label>
            <div>
              <input
                id="cost"
                type="number"
                placeholder="Precio en pesos"
                name="cost"
                onChange={formik.handleChange}
                value={formik.values.cost}
              />
              {formik.touched.cost && formik.errors.cost ? (
                <p className="error">{formik.errors.cost}</p>
              ) : null}
            </div>
          </div>
          <div className="input" style={{ marginTop: '30px' }}>
            <label htmlFor="features">Descripción</label>
            <div>
              <textarea
                id="features"
                placeholder="Presiona Enter para separar los detalles por puntos"
                rows="10"
                cols="32"
                onChange={formik.handleChange}
                value={data && formik.values.features}
              />
              {formik.touched.features && formik.errors.features ? (
                <p className="error">{formik.errors.features}</p>
              ) : null}
            </div>
          </div>
          <div className="containerButton">
            <Button type="submit" variant="succes">
              Enviar
            </Button>
            <Button variant="cancel">Limpiar</Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

GenerarRecompensa.propTypes = {
  getCompanies: PropTypes.array,
  onClick: PropTypes.func,
  data: PropTypes.object,
};

export default GenerarRecompensa;
