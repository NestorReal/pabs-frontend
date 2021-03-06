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

function UserAdmin({ data, header, deleteUser, datakey, FuncEdit }) {
  return (
    <Container>
      <div className="subtext">
        <p>A continuación se muestra una lista de los usuarios</p>
      </div>
      <Table
        tHeader={header}
        data={data}
        keyData={datakey}
        actions
        FuncRemove={id => deleteUser(id)}
        FuncEdit={id => FuncEdit(id)}
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
  FuncEdit: PropTypes.object,
};

export default UserAdmin;
