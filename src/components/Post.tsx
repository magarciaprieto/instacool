import React from 'react';
import { faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  backgroundColor: '#fff',
  padding: '10px 15px',
  border: '1px solid #ddd',
}

interface IPostProps {
  image: string
}

export default function Post ({image}: IPostProps) {
  return (
    <div style={style}>
      <img src={image} alt='' />
      <div style={{ display: 'flex', backgroundColor: '#eee', marginLeft: '-15px', marginBottom: '-10px', width: 'calc(100% + 30px)'}}>
        <div style={{ flex: 1, textAlign: 'center', padding: '10px 15px', cursor: 'pointer'}}><FontAwesomeIcon icon={faThumbsUp} /> Like </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '10px 15px', cursor: 'pointer'}}><FontAwesomeIcon icon={faShare} /> Compartir </div>
      </div>
    </div>
  );
}