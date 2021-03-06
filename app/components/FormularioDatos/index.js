/**
 *
 * FormularioDatos
 *
 */

import React, { useState } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { AiOutlineUser, AiOutlineEnvironment } from 'react-icons/ai';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './styles';
import Input from '../components/Input';
import Check from '../components/Check';
import Button from '../components/Button';
import { InputGroup } from '../components/InputGroup';

import { formData, validatePassword } from './validation';

function FormularioDatos(props) {
  const [passShow, setPassShow] = useState({
    password: false,
    confipassword: false,
  });
  const show = () => {
    if (!passShow.password) {
      setPassShow({ ...passShow, password: true });
    } else {
      setPassShow({ ...passShow, password: false });
    }
  };
  const showConfi = () => {
    if (!passShow.confipassword) {
      setPassShow({ ...passShow, confipassword: true });
    } else {
      setPassShow({ ...passShow, confipassword: false });
    }
  };
  const [check, setCheck] = useState(false);

  const termsConditions = event => {
    setCheck(event.target.checked);
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validatePassword,
    onSubmit: values => {
      props.getData(values);
      const test = {
        email: values.email,
        full_name: values.name,
        phone_number: values.phone_number,
        password: values.password,
        roles: 'user',
      };
      props.createUser(test);
    },
  });

  return (
    <Container>
      <div className="tituloDos">
        <h2>Datos del responsable de pago</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="responsable input-group-wrapper">
          <InputGroup className="left">
            <div>
              <Input
                label="Nombre(s) del reponsable de pago:"
                placeholder="Nombre de ejemplo"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.name && formik.errors.name ? (
                <p className="error">{formik.errors.name}</p>
              ) : null}
            </div>

            <div>
              <Input
                label="Segundo apellido:"
                placeholder="Apellido de ejemplo"
                name="mothers_lastname"
                onChange={formik.handleChange}
                value={formik.values.mothers_lastname}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.mothers_lastname &&
              formik.errors.mothers_lastname ? (
                <p className="error">{formik.errors.mothers_lastname}</p>
              ) : null}
            </div>

            <div>
              <Input
                label="Tel??fono:"
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

            <div>
              <Input
                label="Calle:"
                placeholder="Calle de ejemplo"
                name="street"
                onChange={formik.handleChange}
                value={formik.values.street}
              >
                <AiOutlineEnvironment />
              </Input>
              {formik.touched.street && formik.errors.street ? (
                <p className="error">{formik.errors.street}</p>
              ) : null}
            </div>

            <Input
              label="No. interior:"
              placeholder="Ej. 1234567890"
              name="int_number"
              onChange={formik.handleChange}
              value={formik.values.int_number}
            >
              <AiOutlineEnvironment />
            </Input>

            <div>
              <Input
                label="Municipio:"
                placeholder="municipio"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.city && formik.errors.city ? (
                <p className="error">{formik.errors.city}</p>
              ) : null}
            </div>
          </InputGroup>

          <InputGroup className="right">
            <div>
              <Input
                label="Primer apellido:"
                placeholder="Apellido de ejemplo"
                name="father_lastname"
                onChange={formik.handleChange}
                value={formik.values.father_lastname}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.father_lastname &&
              formik.errors.father_lastname ? (
                  <p className="error">{formik.errors.father_lastname}</p>
                ) : null}
            </div>

            <div>
              <Input
                label="Fecha de nacimiento:"
                placeholder="dd/mm/aaaa"
                name="birthname"
                onChange={formik.handleChange}
                value={formik.values.birthname}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.birthname && formik.errors.birthname ? (
                <p className="error">{formik.errors.birthname}</p>
              ) : null}
            </div>

            <div>
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
            </div>

            <div>
              <Input
                label="No. exterior:"
                placeholder="Ej. 1234567890"
                name="ext_number"
                onChange={formik.handleChange}
                value={formik.values.ext_number}
              >
                <AiOutlineEnvironment />
              </Input>
              {formik.touched.ext_number && formik.errors.ext_number ? (
                <p className="error">{formik.errors.ext_number}</p>
              ) : null}
            </div>

            <div>
              <Input
                label="Colonia:"
                placeholder="Colonia de ejemplo"
                name="neighborhood"
                onChange={formik.handleChange}
                value={formik.values.neighborhood}
              >
                <AiOutlineEnvironment />
              </Input>
              {formik.touched.neighborhood && formik.errors.neighborhood ? (
                <p className="error">{formik.errors.neighborhood}</p>
              ) : null}
            </div>
          </InputGroup>
        </div>

        <div className="password">
          <div className="input-group-wrapper">
            <InputGroup className="left">
              <div>
                <Input
                  className={
                    formik.values.password !== '' ? 'fontFontello' : ''
                  }
                  label="Contrase??a"
                  placeholder="Contrase??a"
                  type={passShow.password ? 'text' : 'password'}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                >
                  <button type="button" onClick={show}>
                    {passShow.password ? <BsEye /> : <BsEyeSlash />}
                  </button>
                </Input>
                {formik.touched.password && formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
            </InputGroup>

            <InputGroup className="right">
              <div>
                <Input
                  className={
                    formik.values.confirmPassword !== '' ? 'fontFontello' : ''
                  }
                  label="Confirmar contrase??a"
                  placeholder="Confirmar contrase??a"
                  type={passShow.confipassword ? 'text' : 'password'}
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                >
                  <button type="button" onClick={showConfi}>
                    {passShow.confipassword ? <BsEye /> : <BsEyeSlash />}
                  </button>
                </Input>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                    <p className="error">{formik.errors.confirmPassword}</p>
                ) : null}
              </div>
            </InputGroup>
          </div>
          <div>
            <Check
              label="Acepto los t??rminos y condiciones"
              onChange={termsConditions}
            />
          </div>
        </div>

        <div className="tituloDos" style={{ marginTop: '8.333%' }}>
          <h2>Datos del titular del contrato</h2>
        </div>
        <div className="titular input-group-wrapper">
          <InputGroup className="left input-group">
            <div>
              <Input
                label="Nombre(s) del reponsable de pago:"
                placeholder="Nombre de ejemplo"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.name && formik.errors.name ? (
                <p className="error">{formik.errors.name}</p>
              ) : null}
            </div>

            <div>
              <Input
                label="Segundo apellido:"
                placeholder="Apellido de ejemplo"
                name="mothers_lastname"
                onChange={formik.handleChange}
                value={formik.values.mothers_lastname}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.mothers_lastname &&
              formik.errors.mothers_lastname ? (
                  <p className="error">{formik.errors.mothers_lastname}</p>
                ) : null}
            </div>

            <div>
              <Input
                label="Tel??fono:"
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
          </InputGroup>
          <InputGroup className="right">
            <div>
              <Input
                label="Primer apellido:"
                placeholder="Apellido de ejemplo"
                name="father_lastname"
                onChange={formik.handleChange}
                value={formik.values.father_lastname}
              >
                <AiOutlineUser />
              </Input>
              {formik.touched.father_lastname &&
              formik.errors.father_lastname ? (
                  <p className="error">{formik.errors.father_lastname}</p>
                ) : null}
            </div>

            <div>
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
            </div>
          </InputGroup>
        </div>
        <div className="center" style={{ marginTop: '6.389%' }}>
          <Button variant="primary" onClick={() => props.back(1)}>
            Atr??s
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="primary" type="submit" disabled={!check}>
            Ir a pagar
          </Button>
        </div>
      </form>
    </Container>
  );
}

FormularioDatos.propTypes = {
  getData: PropTypes.func,
  createUser: PropTypes.func,
  back: PropTypes.func,
};

export default FormularioDatos;
