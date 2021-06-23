import React from "react";
import { connect } from "react-redux";

//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import Title from "../../components/Title";
import RegisterForm from "../../components/RegisterForm";

import { ILogin, register as registerThunk } from '../../ducks/Users'
import { ThunkDispatch } from "redux-thunk";

interface IRegisterProps {
  register: (a: ILogin) => void
}
function Register( {register} : IRegisterProps) {
 return (
  <Container center={true}>
    <Card>
      <Title> Registro </Title>
      <RegisterForm onSubmit={register} />
    </Card>
  </Container>
 )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,any>) => ({
  register: (payload: ILogin) => dispatch(registerThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)