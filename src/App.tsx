import React from 'react';
import './App.css';

//Components
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
  <Container>
    <Card>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
      <Button>Enviar</Button>
    </Card>
  </Container>
  );
}

export default App;
