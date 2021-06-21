//Libraries + Dependencies
import React from "react";
import { connect } from "react-redux";

//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import LoginForm from "../../components/LoginForm";
import Title from '../../components/Title';

//Interfaces + Thunks
import { ILogin, login as loginThunk } from '../../ducks/Users'

interface ILoginProps {
  login: (a: ILogin) => void
}

function Login( {login}: ILoginProps) {
 return (
  <Container center={true}>
    <Card>
      <Title>Iniciar sesión</Title>
      <LoginForm onSubmit={login} />
    </Card>
  </Container>
 )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => ({
  login: (payload: ILogin) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)