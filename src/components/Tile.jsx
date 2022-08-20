import React from 'react';

const colors = {
    black:"#779556",
    white:"#ebecd0"
}

function Tile({tileId, pieceName, color, imageUrl, action}) {

  return (
    <div 
        
        id={tileId}
        className="tile"
        style={{
            backgroundColor:`${colors[color]}`,
           
        }}
        onClick={action}
        >    
       
          {
            // if there is an image render this div
            imageUrl && <div 
              id={pieceName + ' ' + tileId}
              className='piece' 
              onClick={action}
              style={{
                  backgroundImage:`url(${imageUrl})`
              }}>    
          </div>
          }
    </div>
  )
}

export default Tile;