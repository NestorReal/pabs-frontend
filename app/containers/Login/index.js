/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login } from './actions';
import { Container } from './styles';
import Portada from '../../components/Portada';
import ContainerForm from '../../components/ContainerForm';
import Input from '../../components/components/Input';
import Button from '../../components/components/Button';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const [passShow, setPassShow] = useState(false);
  const show = () => {
    if (!passShow) {
      setPassShow(true);
    } else {
      setPassShow(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Este campo es requerido')
        .email('Por favor ingrese un correo valido'),
      password: Yup.string().required('Este campo es requerido'),
    }),
    onSubmit: values => {
      props.dispatch(login(values.email, values.password, props.history));
    },
  });
  return (
    <Container>
      <Portada />
      <ContainerForm>
        <div className="center">
          <h1>Iniciar sesión</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="center">
            <div className="formulario">
              <Input
                label="Correo de usuario"
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
                className={
                  formik.values.password !== '' && !passShow
                    ? 'fontFontello'
                    : 'Arial'
                }
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
            <div className="containerButton">
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </div>
          </div>
        </form>
      </ContainerForm>
    </Container>
  );
}

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
