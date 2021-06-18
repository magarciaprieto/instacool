import React from "react";
import Button from "../../components/Button";
import ProfileImg from "../../components/ProfileImg";
import Card from "../../components/Card";

const styles = {
  container: {
    padding: '15px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  }
}

export default function Profile () {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <ProfileImg />
        <Button> Agregar </Button>
      </div>  
      <div style={styles.row}>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
      </div>
      <div style={styles.row}>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
        <Card><img src='http://placekitten.com/200/200' alt=''/></Card>
      </div>
    </div>
  )
}