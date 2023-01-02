import React from 'react';

const colors = {
    black:"#779556",
    white:"#ebecd0"
}

function Tile({tileId, pieceName, color, imageUrl, coords, action}) {


  return (
    <div 
        id={tileId}
        className="tile"
        style={{
            backgroundColor:`${colors[color]}`,     
        }}
        coords={coords}
        onDrop={action}
        >        
          {imageUrl && <div 
              id={pieceName + ' ' + tileId}
              className={`piece ${coords.x} ${coords.y}`}
              style={{
                  backgroundImage:`url(${imageUrl})`
              }}>    
          </div>
          }
    </div>
  )
}

export default Tile;