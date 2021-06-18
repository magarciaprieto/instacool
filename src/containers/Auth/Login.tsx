import React from "react";
import { connect } from "react-redux";

//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import LoginForm from "../../components/LoginForm";
import Title from '../../components/Title';

import { ILogin, login } from '../../ducks/Users'

function Login() {
 return (
  <Container center={true}>
    <Card>
      <Title>Iniciar sesión</Title>
      <LoginForm />
    </Card>
  </Container>
 )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  login: (payload: ILogin) => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)