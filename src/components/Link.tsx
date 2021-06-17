import React from 'react';

const style = {
  color: 'blue',
  fontSize: '14px',
  padding: '15px',
}

interface ILinkProps {
  children: any
}

export default function Link ({children, ...props}: ILinkProps) {
  return (
    <a {...props} style={style}>
      {children}
    </a>
  );
}