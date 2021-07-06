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
  like: () => void
  share: () => void
}

export default function Post ({image, like, share}: IPostProps) {
  return (
    <div style={style}>
      <img style={{width: '300px', height: '200px'}} src={image} alt='' />
      <Footer like={like} share={share}/>
    </div>
  );
}