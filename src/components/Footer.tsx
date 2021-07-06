import React from "react";
import { faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  button: {
    flex: 1,
    textAlign: 'center',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  footer: {
    display: 'flex',
    backgroundColor: '#eee',
    marginLeft: '-15px',
    marginBottom: '-10px',
    width: 'calc(100% + 30px)',
  }
}

interface IFooterProps {
  like: () => void
  share: () => void
}

export default function Footer({ like, share }: IFooterProps) {
  return (
    <div style={styles.footer}>
      <div onClick={like} style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} /> Like </div>
      <div onClick={share} style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faShare} /> Compartir </div>
    </div>
  )
}