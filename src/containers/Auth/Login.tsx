import React from "react";
//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import LoginForm from "../../components/LoginForm";
import Title from '../../components/Title';

export default function Login() {
 return (
  <Container center={true}>
    <Card>
      <Title>Iniciar sesión</Title>
      <LoginForm />
    </Card>
  </Container>
 )
}