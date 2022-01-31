/**
 *
 * HomeAdmin
 *
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notifications from 'containers/Notifications';
import {
  addErrorMessage,
  addSuccessMessage,
} from 'containers/Notifications/actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { AiOutlineProfile, AiOutlineUser } from 'react-icons/ai';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import GenerarRecompensa from 'components/GenerarRecompensa';
// import ConsultarContrato from 'components/ConsultarContrato';
import ReferenciaGenerada from 'components/ReferenciaGenerada';
import UserAdmin from 'components/UserAdmin';
import CreateUser from 'components/CreateUser';
// import AgregarGrupo from 'components/AgregarGrupo';
import { Container } from './styles';
import makeSelectHomeAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from '../../images/logo2.svg';
import {
  dataReferencia,
  headerReferencia,
  dataPago,
  headerPago,
  dataAdminUser,
  headerAdminUser,
  // eslint-disable-next-line import/extensions
} from './data.js';

import { getUsers, getUser, deleteUser, createUserAction } from './actions';

export function HomeAdmin(props) {
  useInjectReducer({ key: 'HomeAdmin', reducer });
  useInjectSaga({ key: 'HomeAdmin', saga });

  useEffect(() => {
    divcontratos.current.style.display = 'block';
  }, []);

  useEffect(() => {
    props.dispatch(getUsers());
    props.dispatch(getUser());
  }, []);
  const title = [
    'Crear plan',
    'Pagos USA',
    'Consulta de contratos',
    'Prospectos',
    'Usuarios',
    'Crear usuarios',
    'Crear usuarios',
  ];
  const divcontratos = useRef(null);
  const divreportes = useRef(null);
  const divusuarios = useRef(null);
  const [state, setState] = useState({
    contrato: true,
    reporte: false,
    usuario: false,
  });
  const [option, setOption] = useState(0);

  const ContainerChildren = optionJson => {
    // eslint-disable-next-line react/prop-types
    switch (optionJson.option) {
      case 0:
        return <GenerarRecompensa />;
      case 1:
        return (
          <ReferenciaGenerada
            data={dataAdminUser}
            header={headerAdminUser}
            actions
          />
        );
      case 2:
        return (
          <ReferenciaGenerada
            data={dataReferencia}
            header={headerReferencia}
            down
          />
        );
      case 3:
        return <ReferenciaGenerada data={dataPago} header={headerPago} down />;
      case 4:
        return (
          <UserAdmin
            data={props.HomeAdmin.users.filter(
              user => !user.roles.includes('user'),
            )}
            header={headerAdminUser}
            user={props.HomeAdmin.user}
            deleteUser={id => props.dispatch(deleteUser(id))}
          />
        );
      case 5:
        return (
          <CreateUser
            createUser={payload =>
              props.dispatch(
                createUserAction(
                  payload.userName,
                  payload.number,
                  payload.email,
                  payload.password,
                  payload.role,
                ),
              )
            }
            sendError={() =>
              props.dispatch(addErrorMessage(`Error en los datos`))
            }
          />
        );
      default:
        return <GenerarRecompensa />;
    }
  };

  const contrato = () => {
    if (divcontratos.current.style.display === 'none') {
      divcontratos.current.style.display = 'block';
      setState({ ...state, contrato: true });
    } else {
      divcontratos.current.style.display = 'none';
      setState({ ...state, contrato: false });
    }
  };

  const reporte = () => {
    if (divreportes.current.style.display === 'none') {
      divreportes.current.style.display = 'block';
      setState({ ...state, reporte: true });
    } else {
      divreportes.current.style.display = 'none';
      setState({ ...state, reporte: false });
    }
  };
  const usuario = () => {
    if (divusuarios.current.style.display === 'none') {
      divusuarios.current.style.display = 'block';
      setState({ ...state, usuario: true });
    } else {
      divusuarios.current.style.display = 'none';
      setState({ ...state, usuario: false });
    }
  };

  return (
    <Container>
      <div className="containerMenu">
        <Notifications />
        <img className="logo" src={logo} alt="log" />
        <div className="menu">
          <button
            className={state.contrato ? 'activate' : ''}
            type="button"
            onClick={contrato}
          >
            <AiOutlineProfile style={{ marginRight: '13px' }} />
            Planes
          </button>
          <div ref={divcontratos} className="containerOptions">
            <button
              className={option === 0 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(0)}
            >
              Crear plan
            </button>
            <button
              className={option === 1 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(1)}
            >
              Consultar plan
            </button>
          </div>
          <button
            className={state.reporte ? 'activate' : ''}
            type="button"
            onClick={reporte}
          >
            <AiOutlineProfile style={{ marginRight: '13px' }} />
            Reportes
          </button>
          <div ref={divreportes} className="containerOptions">
            <button
              className={option === 2 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(2)}
            >
              Consulta de contrato
            </button>
            <button
              className={option === 3 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(3)}
            >
              Prospectos
            </button>
          </div>
          <button
            className={state.usuario ? 'activate' : ''}
            type="button"
            onClick={usuario}
          >
            <AiOutlineUser style={{ marginRight: '13px' }} />
            Usuarios
          </button>
          <div ref={divusuarios} className="containerOptions">
            <button
              className={option === 4 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(4)}
            >
              Administrar Usuarios
            </button>
            <button
              className={option === 5 ? 'activateOption' : ''}
              type="button"
              onClick={() => setOption(5)}
            >
              Crear usuarios
            </button>
          </div>
        </div>
        <button className="buttonSalir" type="button">
          <BsArrowLeftCircle />
        </button>
      </div>
      <div className="containerChildren">
        <div className="header">
          <div className="title">{title[option]}</div>
          <div className="sesion">
            <div className="text">
              Bienvenido Juan
              <div className="subtext">Tipo de usuario</div>
            </div>
            <button type="button" className="sesionButton">
              Cerrar Sesión
              <MdOutlineEmail
                style={{
                  height: '15px',
                  width: '15px',
                  color: '#1E2B31',
                  marginLeft: '5px',
                  marginTop: '-4px',
                }}
              />
            </button>
          </div>
        </div>
        <div className="bodyChildren">
          <ContainerChildren option={option} />
        </div>
      </div>
    </Container>
  );
}

HomeAdmin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  HomeAdmin: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  HomeAdmin: makeSelectHomeAdmin(),
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

export default compose(withConnect)(HomeAdmin);
