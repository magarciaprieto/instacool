import React from 'react';

const style = (center: boolean) => ({
  backgroundColor: '#eee',
  padding: '10px 15px',
  height: 'calc(100vh - 20px)',
  width: 'calc(100vw - 30px)',
  display: 'flex',
  justifyContent: center? 'center': undefined,
  alignItems: center ? 'center': undefined,
  flexDirection: 'column',
}) as React.CSSProperties

interface IContainerProps {
  children: any
  center?: boolean
}

export default function Content ({children, center = false}: IContainerProps) {
  return (
    <div style={style(center)}>
      {children}
    </div>
  );
}