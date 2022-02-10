/**
 *
 * HomeAdmin
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notifications from 'containers/Notifications';
import {
  addErrorMessage,
  //  addSuccessMessage,
} from 'containers/Notifications/actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { AiOutlineProfile, AiOutlineUser } from 'react-icons/ai';
import GenerarRecompensa from 'components/GenerarRecompensa';
import ReferenciaGenerada from 'components/ReferenciaGenerada';
import UserAdmin from 'components/UserAdmin';
import CreateUser from 'components/CreateUser';
import { Container } from './styles';
import makeSelectHomeAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import Menu from '../../components/Menu';
import Children from '../../components/Children';
import {
  headerPlan,
  headerConsultarContrato,
  headerPago,
  headerAdminUser,
  keyAdminUser,
  // eslint-disable-next-line import/extensions
} from './data.js';

import { getUsers, getUser, deleteUser, createUserAction } from './actions';

export function HomeAdmin(props) {
  useInjectReducer({ key: 'HomeAdmin', reducer });
  useInjectSaga({ key: 'HomeAdmin', saga });

  useEffect(() => {
    props.dispatch(getUsers());
    props.dispatch(getUser());
  }, []);

  const ContainerChildren = {
    Crear_plan: <GenerarRecompensa />,
    Consultar_plan: (
      <ReferenciaGenerada
        textForm="Nombre del plan"
        placeholder="Nombre del plan"
        textButton="Buscar"
        header={headerPlan}
        filterNumber
      />
    ),
    Consultar_contratos: (
      <ReferenciaGenerada
        textForm="Selecciona rango de fechas"
        placeholder="21/10/2021 - 21/10/2021"
        textButton="Buscar"
        header={headerConsultarContrato}
        filterNumber
      />
    ),
    Prospectos: (
      <ReferenciaGenerada
        textForm="Selecciona rango de fechas"
        placeholder="21/10/2021 - 21/10/2021"
        textButton="Buscar"
        header={headerPago}
        filterNumber
      />
    ),
    Administrar_usuarios: (
      <UserAdmin
        data={props.HomeAdmin.users.filter(
          user => !user.roles.includes('user'),
        )}
        header={headerAdminUser}
        user={props.HomeAdmin.user}
        deleteUser={id => props.dispatch(deleteUser(id))}
        datakey={keyAdminUser}
      />
    ),
    Crear_usuarios: (
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
        sendError={() => props.dispatch(addErrorMessage(`Error en los datos`))}
      />
    ),
  };

  const [state, setState] = useState({
    plan: true,
    reporte: false,
    usuario: false,
  });
  const [option, setOption] = useState('Crear_plan');
  const buttons = [
    {
      text: 'Planes',
      icon: <AiOutlineProfile />,
      activate: state.plan,
      onClick: () => {
        setState({ plan: true, reporte: false, usuario: false });
        setOption('Crear_plan');
      },
      optionActivate: state.plan,
      options: [
        {
          text: 'Crear plan',
          activate: option === 'Crear_plan',
          onClick: () => {
            setOption('Crear_plan');
          },
        },
        {
          text: 'Consultar plan',
          activate: option === 'Consultar_plan',
          onClick: () => {
            setOption('Consultar_plan');
          },
        },
      ],
    },
    {
      text: 'Reportes',
      icon: <AiOutlineProfile />,
      activate: state.reporte,
      onClick: () => {
        setState({ plan: false, reporte: true, usuario: false });
        setOption('Consultar_contratos');
      },
      optionActivate: state.reporte,
      options: [
        {
          text: 'Consulta de contratos',
          activate: option === 'Consultar_contratos',
          onClick: () => {
            setOption('Consultar_contratos');
          },
        },
        {
          text: 'Prospectos',
          activate: option === 'Prospectos',
          onClick: () => {
            setOption('Prospectos');
          },
        },
      ],
    },
    {
      text: 'Usuarios',
      icon: <AiOutlineUser />,
      activate: state.usuario,
      onClick: () => {
        setState({ plan: false, reporte: false, usuario: true });
        setOption('Administrar_usuarios');
      },
      optionActivate: state.usuario,
      options: [
        {
          text: 'Administrar usuarios',
          activate: option === 'Administrar_usuarios',
          onClick: () => {
            setOption('Administrar_usuarios');
          },
        },
        {
          text: 'Crear usuarios',
          activate: option === 'Crear_usuarios',
          onClick: () => {
            setOption('Crear_usuarios');
          },
        },
      ],
    },
  ];

  return (
    <Container>
      <Notifications />
      <Menu userName={props.HomeAdmin.user.full_name} buttons={buttons} />
      <Children
        title={option.replace('_', ' ')}
        userName={
          Object.keys(props.HomeAdmin.user).length !== 0 &&
          props.HomeAdmin.user.full_name
        }
        typeUser={
          Object.keys(props.HomeAdmin.user).length !== 0 &&
          props.HomeAdmin.user.roles[0]
        }
        sesion={() => props.history.push('/auth-admin')}
      >
        {ContainerChildren[option]}
      </Children>
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
