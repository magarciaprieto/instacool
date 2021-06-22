import React from 'react';
import { WrappedFieldProps } from 'redux-form';

const style = {
  backgroundColor: '#fff',
  padding: '10px 15px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: 'calc(100%-30px)',
  marginBottom: '10px', 
  display: 'flex'
}

const spanStyle = {
  fontSize: '10px',
  color: '#777',
  textTransform: 'uppercase',
  fontWeight: 900,
} as React.CSSProperties

interface IInputProps {
  placeholder?: string
  label: string
}

export default function Input ({label, ...props}: IInputProps & WrappedFieldProps) {
  return (
    <div>
      <span style={spanStyle}>{label}</span>
      <input {...props} {...props.input} style={style} /> {/* Se agrega {...props.input} para no recibir error de que al correo no se le pasa un string, aunq lo sea */}
    </div>
  );
}