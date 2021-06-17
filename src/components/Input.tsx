import React from 'react';

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

export default function Input ({label, ...props}: IInputProps) {
  return (
    <div>
      <span style={spanStyle}>{label}</span>
      <input {...props} style={style} />
    </div>
  );
}