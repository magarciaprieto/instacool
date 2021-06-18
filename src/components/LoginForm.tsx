import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, InjectedFormProps } from 'redux-form';

import Input from './Input';
import Button from './Button';
import Center from './Center';

function LoginForm ( { handleSubmit, ...props}: InjectedFormProps ) {
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
      <Button block={true}>Enviar</Button>
      <Center>
        <Link to='/register'>Ir al registro</Link>
      </Center>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)