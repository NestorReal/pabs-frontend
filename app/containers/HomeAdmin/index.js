/**
 *
 * HomeAdmin
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth from 'utils/auth';
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
  headerAdminUser,
  keyAdminUser,
  keyPagoProspectos,
  headerPagoProspecto,
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
  getTransactions,
  setOption,
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
    props.dispatch(getTransactions());
  }, []);

  const deletePlan = idPlan => {
    fetch(`https://api.hispanocash.com/plans/${idPlan}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getToken()}`,
      },
      method: 'DELETE',
    })
      .then(() => props.dispatch(getPlan()))
      .then(() => props.dispatch(getPlan()))
      .catch(error => console.log(error));
  };
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
        data={props.HomeAdmin.plans.map(plan => ({
          company: plan.company,
          cost: plan.cost,
          features: plan.features.map(planName => planName.description)[0],
          name: plan.name,
          // eslint-disable-next-line no-underscore-dangle
          _id: plan._id,
        }))}
        filterNumber
        actions
        Fundelete={id => deletePlan(id)}
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
        header={headerPagoProspecto}
        keyData={keyPagoProspectos}
        data={props.HomeAdmin.transactions}
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
  const [edit, setEdit] = useState({
    plan: false,
    user: false,
  });

  const funcEditPlan = id => {
    setEdit({ ...edit, plan: true });
    // props.dispatch(setOption('Editar_plan'));
    props.dispatch(getEditPlan(id));
  };

  const funcEditUser = id => {
    // console.log(id);
    setEdit({ ...edit, user: true });
    // props.dispatch(setOption('Editar_usuarios'));
    props.dispatch(getEditUser(id));
  };

  const buttons = [
    {
      text: 'Planes',
      icon: <AiOutlineProfile />,
      activate: state === 'Planes',
      onClick: () => {
        setState('Planes');
        props.dispatch(setOption('Crear_plan'));
      },
      optionActivate: state === 'Planes',
      options: [
        {
          text: edit.plan ? 'Editar plan' : 'Crear plan',
          activate:
            props.HomeAdmin.option === 'Crear_plan' ||
            props.HomeAdmin.option === 'Editar_plan',
          onClick: () => {
            props.dispatch(setOption('Crear_plan'));
            setEdit({ ...edit, plan: false });
          },
        },
        {
          text: 'Consultar plan',
          activate: props.HomeAdmin.option === 'Consultar_plan',
          onClick: () => {
            props.dispatch(setOption('Consultar_plan'));
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
        props.dispatch(setOption('Consultar_contratos'));
      },
      optionActivate: state === 'Reportes',
      options: [
        {
          text: 'Consulta de contratos',
          activate: props.HomeAdmin.option === 'Consultar_contratos',
          onClick: () => {
            props.dispatch(setOption('Consultar_contratos'));
          },
        },
        {
          text: 'Prospectos',
          activate: props.HomeAdmin.option === 'Prospectos',
          onClick: () => {
            props.dispatch(setOption('Prospectos'));
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
        props.dispatch(setOption('Administrar_usuarios'));
      },
      optionActivate: state === 'Usuarios',
      options: [
        {
          text: 'Administrar usuarios',
          activate: props.HomeAdmin.option === 'Administrar_usuarios',
          onClick: () => {
            props.dispatch(setOption('Administrar_usuarios'));
          },
        },
        {
          text: edit.user ? 'Editar usuario' : 'Crear usuarios',
          activate:
            props.HomeAdmin.option === 'Crear_usuarios' ||
            props.HomeAdmin.option === 'Editar_usuarios',
          onClick: () => {
            props.dispatch(setOption('Crear_usuarios'));
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
        props.dispatch(setOption('Empresa'));
      },
    },
    {
      text: 'Descripción',
      icon: <AiOutlineProfile />,
      activate: state === 'Descripcion',
      onClick: () => {
        setState('Descripcion');
        props.dispatch(setOption('Descripcion'));
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
        title={props.HomeAdmin.option.replace('_', ' ')}
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
        {ContainerChildren[props.HomeAdmin.option]}
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
