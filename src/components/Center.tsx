import React from 'react';

const style = {
  textAlign: 'center',
  width: '100%',
} as React.CSSProperties


export default function Center({...props}) {
  return (
    <div {...props} style={style} />
  );
}