import React from "react";

//Components
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Link from '../../components/Link';
import Center from '../../components/Center';

export default function Register() {
 return (
  <Container>
    <Card>
      <Title>Registro</Title>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
      <Button block={true}>Enviar</Button>
      <Center>
        <Link>Iniciar sesión</Link>
      </Center>
    </Card>
  </Container>
 )
}