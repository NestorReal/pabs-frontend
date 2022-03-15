/**
 *
 * ValidatePayment
 *
 */

import React, { useEffect } from 'react';
import auth from 'utils/auth';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
function ValidatePayment() {
  useEffect(() => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const token = urlParams.get('token');
    setToken(token);
  }, []);

  const setToken = token => {
    fetch(`https://api.hispanocash.com/payments/paypal/?order_id=${token}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getToken()}`,
      },
      method: 'POST',
    })
      .then(response => response.json())
      .then(success => {
        captureOrder(success.purchase_units[0].payments.authorizations[0].id);
      })
      .catch(error => console.log(error));
  };

  const captureOrder = token => {
    fetch(
      `https://api.hispanocash.com/payments/paypal/capture-order/?authorization_id=${token}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        method: 'POST',
      },
    )
      .then(response => response.json())
      .then(success => {
        window.close(success);
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <h3>Procesando el pago.....</h3>
    </div>
  );
}

ValidatePayment.propTypes = {};

export default ValidatePayment;
