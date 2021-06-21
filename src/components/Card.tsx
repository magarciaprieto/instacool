import React from 'react';

const style = {
  backgroundColor: '#fff',
  padding: '10px 15px',
  border: '1px solid #eee',
}

interface ICardProps {
  children: any
}

export default function Card ({children}: ICardProps) {
  return (
    <div style={style}>
      {children} 
    </div>
  );
}