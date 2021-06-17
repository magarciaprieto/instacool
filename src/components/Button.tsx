import React from 'react';

const style = {
  backgroundColor: '#00D1B2',
  padding: '10px 15px',
  border: '0px',
  borderRadius: '4px',
  color: '#fff',
}


export default function Button ({...props}) {
  return (
    <button {...props} style={style} />
  );
}