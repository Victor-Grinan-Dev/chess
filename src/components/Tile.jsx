import React from 'react';

const colors = {
    black:"#779556",
    white:"#ebecd0"
}

function Tile({id, color}) {
  return (
    <div className='tile' style={{backgroundColor:`${colors[color]}`}}>
        
    </div>
  )
}

export default Tile