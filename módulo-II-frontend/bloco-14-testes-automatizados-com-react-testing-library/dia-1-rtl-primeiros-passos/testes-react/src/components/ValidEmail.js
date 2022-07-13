import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, valid } = props;
  let color = 'black';
  if (verifyEmail(email)) color = 'red';
  return (
    <div>
      <h2
        data-testid="id-email-user"
        style={{ color: color }}
      >{`Valor: ${email}`}</h2>
      <h3 data-testid="id-email-validation">{ valid && (verifyEmail(email) ? 'Email Válido' : 'Email Inválido') }</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;