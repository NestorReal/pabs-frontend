/**
 *
 * GenerarRecompensa
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import { InputGroup } from '../components/InputGroup';

const validate = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  features: Yup.string().required('Este campo es requerido'),
  companyId: Yup.string().required('Este campo es requerido'),
  cost: Yup.number('Porfavor ingrese un valor numerico')
    .required('Este campo es requerido')
    .positive('Ingrese un número positivo'),
});

function GenerarRecompensa({ getCompanies, getFeatures, onClick, data }) {
  const [dataPlan] = useState({
    name: data ? data.name : '',
    cost: data ? data.cost : 0,
    features: data ? data.features : '',
    companyId: data ? data.company : '',
    // eslint-disable-next-line no-underscore-dangle
    id: data ? data._id : '',
  });
  const formik = useFormik({
    initialValues: dataPlan,
    validationSchema: validate,
    onSubmit: values => onClick(values),
  });
  return (
    <Container>
      <div className="formulario">
        <form onSubmit={formik.handleSubmit} className="form">
          <InputGroup>
            <div className="select">
              <Select
                label="Selecciona empresa"
                name="companyId"
                value={formik.values.companyId}
                onChange={formik.handleChange}
                autoHeight
                Rounded={false}
              >
                <option>Seleccionar</option>
                {getCompanies.map(item => (
                  // eslint-disable-next-line no-underscore-dangle
                  <option key={uuidv4()} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </Select>
              {formik.touched.companyId && formik.errors.companyId ? (
                <p className="error">{formik.errors.companyId}</p>
              ) : null}
            </div>
            <div className="input">
              <div>
                <Input
                  label="Nombre del plan"
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  disabled={!!data}
                  autoHeight
                  Rounded={false}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="error">{formik.errors.name}</p>
                ) : null}
              </div>
            </div>
            <div className="input">
              <div>
                <Input
                  label="Precio en pesos"
                  type="number"
                  placeholder="$"
                  name="cost"
                  onChange={formik.handleChange}
                  value={formik.values.cost}
                  autoHeight
                  Rounded={false}
                />
                {formik.touched.cost && formik.errors.cost ? (
                  <p className="error">{formik.errors.cost}</p>
                ) : null}
              </div>
            </div>
            <div className="select">
              <Select
                name="features"
                onChange={formik.handleChange}
                value={formik.values.features}
                label="Selecciona la descripcion"
                autoHeight
                Rounded={false}
              >
                <option>Seleccionar</option>
                {getFeatures.map(item => (
                  // eslint-disable-next-line no-underscore-dangle
                  <option key={uuidv4()} value={item._id}>
                    {item.description}
                  </option>
                ))}
              </Select>
              {formik.touched.features && formik.errors.features ? (
                <p className="error">{formik.errors.features}</p>
              ) : null}
            </div>
          </InputGroup>
          <div className="center">
            <div className="containerButton">
              <Button type="submit" size="medium" variant="succes">
                Enviar
              </Button>
              <Button variant="cancel" size="medium">
                Limpiar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

GenerarRecompensa.propTypes = {
  getCompanies: PropTypes.array,
  getFeatures: PropTypes.array,
  onClick: PropTypes.func,
  data: PropTypes.object,
};

export default GenerarRecompensa;
