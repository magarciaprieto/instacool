import React from 'react';

const style = {
  color: '#555',
}

interface ITitleProps {
  children: string
}

export default function Title ({children, ...props}: ITitleProps) {
  return (
    <h2 {...props} style={style}>
      {children}
    </h2>
)}