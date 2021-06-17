import React from 'react';

const style = {
  backgroundColor: '#eee',
  padding: '10px 15px',
  height: 'calc(100vh - 20px)',
  width: 'calc(100vw - 30px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

interface IContainerProps {
  children: any
}

export default function Content ({children}: IContainerProps) {
  return (
    <div style={style}>
      {children}
    </div>
  );
}