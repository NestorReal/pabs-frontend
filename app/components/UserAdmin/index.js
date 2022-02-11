/**
 *
 * UserAdmin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';
import Table from '../components/Table';

function UserAdmin({ data, header, deleteUser, datakey }) {
  return (
    <Container>
      <div className="subtext">
        A continuación se muestra una lista de los usuarios
      </div>
      <Table
        tHeader={header}
        data={data}
        keyData={datakey}
        actions
        FuncRemove={id => deleteUser(id)}
        height="468px"
      />
    </Container>
  );
}

UserAdmin.propTypes = {
  data: PropTypes.array,
  header: PropTypes.array,
  deleteUser: PropTypes.func,
  datakey: PropTypes.array,
};

export default UserAdmin;
