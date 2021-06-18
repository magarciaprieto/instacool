import React from "react";

const style = {
  img: {
    borderRadius: '100%',
  }
}

export default function ProfileImg () {
  return (
    <div >
      <img style={style.img} src='http://placekitten.com/100/100' alt='' />
    </div>  
  )
}