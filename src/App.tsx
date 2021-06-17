import React from 'react';
import './App.css';

//Components
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Link from './components/Link';
import Center from './components/Center';

function App() {
  return (
  <Container>
    <Card>
      <Title>Iniciar sesión</Title>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
      <Button block={true}>Enviar</Button>
      <Center>
        <Link>Ir al registro</Link>
      </Center>
    </Card>
  </Container>
  );
}

export default App;
