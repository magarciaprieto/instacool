import React from 'react';

//Components
import Footer from './Footer';

const style = {
  backgroundColor: '#fff',
  padding: '10px 15px',
  border: '1px solid #ddd',
  marginBottom: '10px'
}

interface IPostProps {
  image: string
}

export default function Post ({image}: IPostProps) {
  return (
    <div style={style}>
      <img src={image} alt='' />
      <Footer />
    </div>
  );
}