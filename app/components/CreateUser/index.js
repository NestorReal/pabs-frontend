/**
 *
 * CreateUser
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// eslint-disable-next-line import/no-unresolved
import { Container } from './style';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

function CreateUser({ onClick, data }) {
  const [passShow, setPassShow] = useState(false);
  const show = () => {
    if (!passShow) {
      setPassShow(true);
    } else {
      setPassShow(false);
    }
  };
  const validate = Yup.object({
    full_name: Yup.string().required('Este campo es requerido'),
    roles: Yup.string().required('Este campo es requerido'),
    email: Yup.string()
      .required('Este campo es requerido')
      .email('Por favor ingrese un correo valido'),
    phone_number: Yup.string().required('Este campo es requerido'),
    password: Yup.string().required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: data ? data.email : '',
      full_name: data ? data.full_name : '',
      phone_number: data ? data.phone_number : '',
      password: '',
      roles: data && Array.isArray(data.roles) ? data.roles[0] : '',
      // eslint-disable-next-line no-underscore-dangle
      id: data ? data.id : '',
    },
    validationSchema: validate,
    onSubmit: values => onClick(values),
  });
  return (
    <Container>
      <div className="subtext">
        Ingrese a información del usuario a continuación
      </div>
      <form onSubmit={formik.handleSubmit} className="containerFormulario">
        <div className="containerInput">
          <div className="left">
            <Input
              label="Nombre:"
              placeholder="Nombre"
              name="full_name"
              onChange={formik.handleChange}
              value={formik.values.full_name}
            >
              <AiOutlineUser />
            </Input>
            {formik.touched.full_name && formik.errors.full_name ? (
              <p className="error">{formik.errors.full_name}</p>
            ) : null}
            <Input
              label="Teléfono:"
              placeholder="Ej. 1234567890"
              name="phone_number"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
            >
              <BsTelephone />
            </Input>
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <p className="error">{formik.errors.phone_number}</p>
            ) : null}
          </div>
          <div className="rigth">
            <Select
              name="roles"
              id="roles"
              onChange={formik.handleChange}
              value={formik.values.roles}
              label="Rol"
            >
              <option>Seleccionar</option>
              <option value="finances">Finances</option>
              <option value="Voluptate">Voluptate</option>
              <option value="ventas">ventas</option>
              <option value="administrador">Administrador</option>
            </Select>
            {formik.touched.roles && formik.errors.roles ? (
              <p className="error">{formik.errors.roles}</p>
            ) : null}
            <Input
              label="Correo:"
              placeholder="ejemplo@ejemplo.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            >
              <MdOutlineEmail />
            </Input>
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
            <Input
              className={formik.values.password !== '' ? 'fontFontello' : ''}
              label="Contraseña"
              placeholder="Contraseña"
              type={passShow ? 'text' : 'password'}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            >
              <button type="button" onClick={show}>
                {passShow ? <BsEye /> : <BsEyeSlash />}
              </button>
            </Input>
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <div className="center">
          <div className="spaceBetween buttons">
            <Button size="medium" variant="succes" type="submit">
              Crear
            </Button>
            <Button variant="cancel" size="medium">
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

CreateUser.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  // sendError: PropTypes.func,
};

export default CreateUser;
