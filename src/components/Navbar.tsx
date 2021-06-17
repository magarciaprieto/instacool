import React from 'react';
import { Link } from 'react-router-dom';
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles= {
  navbar: {
    borderBottom: 'solid 1px #aaa',
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    color: '#555',
    textDecoration: 'none',
  }
}

export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <Link to='/app/newsfeed' style={styles.link}><FontAwesomeIcon icon={faStar} /> Instacool </Link>
      <Link to='/app/profile' style={styles.link}><FontAwesomeIcon icon={faUser} /> Perfil </Link>
    </div>
  )
}