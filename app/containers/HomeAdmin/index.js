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
  keyPlan,
  headerConsultarContrato,
  keyConsultarContrato,
  headerPago,
  headerAdminUser,
  keyAdminUser,
  // eslint-disable-next-line import/extensions
} from './data.js';

import {
  getUsers,
  getUser,
  deleteUser,
  createUserAction,
  editUser,
  getPlan,
  getCompanies,
  createPlan,
  getEditPlan,
  editPlan,
  getEditUser,
  getContract,
  getLeaflets,
  getFeatures,
  createFeatures,
  getEditFeatures,
  deleteFeatures,
  createContract,
  getEditContract,
  deleteContract,
} from './actions';

export function HomeAdmin(props) {
  useInjectReducer({ key: 'HomeAdmin', reducer });
  useInjectSaga({ key: 'HomeAdmin', saga });
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.dispatch(getUsers());
    props.dispatch(getUser());
    props.dispatch(getPlan());
    props.dispatch(getCompanies());
    props.dispatch(getContract());
    props.dispatch(getLeaflets());
    props.dispatch(getFeatures());
  }, []);
  const ContainerChildren = {
    Crear_plan: (
      <GenerarRecompensa
        getCompanies={props.HomeAdmin.companies}
        getFeatures={props.HomeAdmin.features}
        onClick={values => props.dispatch(createPlan(values))}
      />
    ),
    Editar_plan: (
      <GenerarRecompensa
        getCompanies={props.HomeAdmin.companies}
        getFeatures={props.HomeAdmin.features}
        data={props.HomeAdmin.editPlan}
        onClick={value => props.dispatch(editPlan(value))}
      />
    ),
    Consultar_plan: (
      <ReferenciaGenerada
        textForm="Nombre del plan"
        placeholder="Nombre del plan"
        textButton="Buscar"
        header={headerPlan}
        keyData={keyPlan}
        data={props.HomeAdmin.plans}
        actions
        Fundelete={() => {}}
        FuncEdit={id => {
          funcEditPlan(id);
        }}
      />
    ),
    Consultar_contratos: (
      <ReferenciaGenerada
        textForm="Selecciona rango de fechas"
        placeholder="21/10/2021 - 21/10/2021"
        textButton="Buscar"
        header={headerConsultarContrato}
        keyData={keyConsultarContrato}
        data={props.HomeAdmin.contract}
      />
    ),
    Prospectos: (
      <ReferenciaGenerada
        textForm="Selecciona rango de fechas"
        placeholder="21/10/2021 - 21/10/2021"
        textButton="Buscar"
        header={headerPago}
        keyData={keyConsultarContrato}
        data={props.HomeAdmin.leaflets}
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
        FuncEdit={id => {
          funcEditUser(id);
        }}
      />
    ),
    Editar_usuarios: (
      <CreateUser
        onClick={valueUser => props.dispatch(editUser(valueUser))}
        data={props.HomeAdmin.editUser}
      />
    ),
    Crear_usuarios: (
      <CreateUser
        onClick={valueUser => props.dispatch(createUserAction(valueUser))}
      />
    ),
    Empresa: (
      <ReferenciaGenerada
        placeholder={
          props.HomeAdmin.editCompanies.name !== undefined
            ? 'Editar empresa'
            : 'Agregar empresa'
        }
        textButton={
          props.HomeAdmin.editCompanies.name !== undefined
            ? 'Editar'
            : 'Agregar'
        }
        header={['Nombre']}
        keyData={['name']}
        data={props.HomeAdmin.companies}
        actions
        valueInput={props.HomeAdmin.editCompanies.name}
        createValue={value =>
          props.dispatch(
            // eslint-disable-next-line no-underscore-dangle
            createContract(props.HomeAdmin.editCompanies._id, value),
          )
        }
        Fundelete={id => props.dispatch(deleteContract(id))}
        FuncEdit={id => props.dispatch(getEditContract(id))}
      />
    ),
    Descripcion: (
      <ReferenciaGenerada
        placeholder={
          props.HomeAdmin.editFeatures.description !== undefined
            ? 'Editar descripción'
            : 'Agregar descripción'
        }
        textButton={
          props.HomeAdmin.editFeatures.description !== undefined
            ? 'Editar'
            : 'Agregar'
        }
        header={['Descripción']}
        keyData={['description']}
        data={props.HomeAdmin.features}
        actions
        valueInput={props.HomeAdmin.editFeatures.description}
        createValue={value =>
          props.dispatch(
            // eslint-disable-next-line no-underscore-dangle
            createFeatures(props.HomeAdmin.editFeatures._id, value),
          )
        }
        Fundelete={id => props.dispatch(deleteFeatures(id))}
        FuncEdit={id => props.dispatch(getEditFeatures(id))}
      />
    ),
  };

  const [state, setState] = useState('Planes');
  const [option, setOption] = useState('Crear_plan');
  const [edit, setEdit] = useState({
    plan: false,
    user: false,
  });

  const funcEditPlan = id => {
    setEdit({ ...edit, plan: true });
    setOption('Editar_plan');
    props.dispatch(getEditPlan(id));
  };

  const funcEditUser = id => {
    // console.log(id);
    setEdit({ ...edit, user: true });
    setOption('Editar_usuarios');
    props.dispatch(getEditUser(id));
  };

  const buttons = [
    {
      text: 'Planes',
      icon: <AiOutlineProfile />,
      activate: state === 'Planes',
      onClick: () => {
        setState('Planes');
        setOption('Crear_plan');
      },
      optionActivate: state === 'Planes',
      options: [
        {
          text: edit.plan ? 'Editar plan' : 'Crear plan',
          activate: option === 'Crear_plan' || option === 'Editar_plan',
          onClick: () => {
            setOption('Crear_plan');
            setEdit({ ...edit, plan: false });
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
      activate: state === 'Reportes',
      onClick: () => {
        setState('Reportes');
        setOption('Consultar_contratos');
      },
      optionActivate: state === 'Reportes',
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
      activate: state === 'Usuarios',
      onClick: () => {
        setState('Usuarios');
        setOption('Administrar_usuarios');
      },
      optionActivate: state === 'Usuarios',
      options: [
        {
          text: 'Administrar usuarios',
          activate: option === 'Administrar_usuarios',
          onClick: () => {
            setOption('Administrar_usuarios');
          },
        },
        {
          text: edit.user ? 'Editar usuario' : 'Crear usuarios',
          activate: option === 'Crear_usuarios' || option === 'Editar_usuarios',
          onClick: () => {
            setOption('Crear_usuarios');
            setEdit({ ...edit, user: false });
          },
        },
      ],
    },
    {
      text: 'Empresa',
      icon: <AiOutlineProfile />,
      activate: state === 'Empresa',
      onClick: () => {
        setState('Empresa');
        setOption('Empresa');
      },
    },
    {
      text: 'Descripción',
      icon: <AiOutlineProfile />,
      activate: state === 'Descripcion',
      onClick: () => {
        setState('Descripcion');
        setOption('Descripcion');
      },
    },
  ];

  return (
    <Container>
      <Notifications />
      <Menu
        userName={props.HomeAdmin.user.full_name}
        buttons={buttons}
        onClick={() => setShow(!show)}
        show={show}
        sesion={() => props.history.push('/auth-admin')}
      />
      <Children
        style={show ? { left: '150px' } : null}
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
