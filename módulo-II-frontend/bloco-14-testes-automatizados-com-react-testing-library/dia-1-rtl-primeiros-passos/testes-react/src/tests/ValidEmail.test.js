import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email ainda não tenha sido enviado.', () => {
  render(<ValidEmail valid={ false } email='' />);
  const isValid = screen.getByTestId('id-email-validation');
  expect(isValid).not.toBeInTheDocument();
});

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail valid={ true } email={ EMAIL_USER } />);
  const isEmailRed = screen.getByTestId('id-email-user');
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isEmailRed).toHaveStyle('color: red');
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail valid={ true } email={ EMAIL_USER } />);
  const isEmailRed = screen.getByTestId('id-email-user');
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isEmailRed).toHaveStyle('color: black');
});
