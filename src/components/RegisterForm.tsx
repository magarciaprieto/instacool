import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, InjectedFormProps, Field} from 'redux-form';

import Input from './Input';
import Button from './Button';
import Center from './Center';
import { ILogin } from '../ducks/Users';

function RegisterForm ( { handleSubmit }: InjectedFormProps<ILogin> ) {
  return (
    <form onSubmit={handleSubmit}>
      <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} /> {/* Redux-form demands to receive Stateless components (i.e. Input) */}
      <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
      <Button block={true}>Enviar</Button>
      <Center>
        <Link to='/'>Iniciar Sesión</Link>
      </Center>
    </form>
  )
}

export default reduxForm<ILogin>({
  form: 'register',
})(RegisterForm)