import React from 'react';

function Hero({name}) {
  if(name==="joker")
  throw new Error("not a heroname")
  return (
    <div>
      {name}
    </div>
  )
}
export default Hero

