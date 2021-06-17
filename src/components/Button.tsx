import React from 'react';

const style = (block: boolean) => ({
  backgroundColor: '#00D1B2',
  padding: '10px 15px',
  border: '0px',
  borderRadius: '4px',
  color: '#fff',
  width: block ? '100%' : undefined,
  marginBottom: '10px',
})

interface IButtonProps {
  block?: boolean
  children: string
}

export default function Button ({block = false, ...props}: IButtonProps) {
  return (
    <button {...props} style={style(block)} />
  );
}