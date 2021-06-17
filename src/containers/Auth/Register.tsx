import React from "react";
import { Link } from "react-router-dom";

//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Center from '../../components/Center';

export default function Register() {
 return (
  <Container center={true}>
    <Card>
      <Title>Registro</Title>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
      <Button block={true}>Enviar</Button>
      <Center>
        <Link to='/'>Iniciar sesión</Link>
      </Center>
    </Card>
  </Container>
 )
}