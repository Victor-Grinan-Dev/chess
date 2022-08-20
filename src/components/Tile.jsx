import React from 'react';

const colors = {
    black:"#779556",
    white:"#ebecd0"
}

function Tile({id, color, imageUrl}) {
  //console.log(imageUrl);
  return (
    <div 
        className='tile' 
        style={{
            backgroundColor:`${colors[color]}`,
            backgroundImage:`url(${imageUrl})`
        }}>    
    </div>
  )
}

export default Tile