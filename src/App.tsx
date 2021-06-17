import React from 'react';
import './App.css';

//Components
import Card from './components/Card';
import Content from './components/Container';
import Input from './components/Input';

function App() {
  return (
  <Content>
    <Card>
      <Input placeholder='Correo' label='Correo' />
      <Input placeholder='Contraseña' label='Contraseña' />
    </Card>
  </Content>
  );
}

export default App;
