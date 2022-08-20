const allPieces = [];

class Piece{
    constructor(id = "", image = undefined, x = null, y = null){
        this.id = id;
        this.image = image;
        this.x = x;
        this.y = y;
    }
};

//we have 2 colors of pieces
const piecesColor = [
    "_w",
    "_b"
];

//each color contains this pieces, this many times.
const piecesNames = [
    ["pawn", 8],
    ["rook", 2],
    ["knight", 2],
    ["bishop", 2],
    ["king", 1],
    ["queen", 1],
];

for(let color = 0; color < piecesColor.length; color++){//twoo colors, this happens twice.
    for(let piecesType  = 0; piecesType < piecesNames.length; piecesType++ ){// each piece type
        for(let amount = piecesNames[piecesType][1]; amount > 0; amount--){

            let startingX = null
            let id;
            let startingY;

            piecesNames[piecesType][0] === "queen" || piecesNames[piecesType][0] === "king" ? id = piecesNames[piecesType][0] + piecesColor[color] : id = piecesNames[piecesType][0] + amount + piecesColor[color];
            
            
            const image = `assets/${piecesNames[piecesType][0] + piecesColor[color]}.png`;
            
            //assigning the row number to the right piece:
            if (color === 0){//white
                if (piecesNames[piecesType][0] === "pawn"){
                    startingY = 1;
                    startingX = amount-1;
                }else{
                    startingY = 0;              
                    switch ( id ) {
                        //white pieces:
                        case 'rook1_w':
                            startingX = 7;
                            break;
                        case 'rook2_w':
                            startingX = 0;
                            break;
                            
                        case 'knight1_w':
                            startingX = 6;
                            break;
                        case 'knight2_w':
                            startingX = 1;
                            break;

                        case 'bishop1_w':
                            startingX = 5;
                            break;
                        case 'bishop2_w':
                            startingX = 2;
                            break;
                        case 'queen_w':
                            startingX = 3;
                            break;
                        case 'king_w':
                            startingX = 4;
                            break;

}
                }
            }else{//black
                if (piecesNames[piecesType][0] === "pawn"){
                    startingY = 6;
                    startingX = amount-1;
                }else{
                    startingY = 7;
                    switch (id){
                        //black pieces:
                        case 'rook1_b':
                            startingX = 7;
                            break;
                        case 'rook2_b':
                            startingX = 0;
                            break;
                            
                        case 'knight1_b':
                            startingX = 6;
                            break;
                        case 'knight2_b':
                            startingX = 1;
                            break;

                        case 'bishop1_b':
                            startingX = 5;
                            break;
                        case 'bishop2_b':
                            startingX = 2;
                            break;
                        case 'queen_b':
                            startingX = 3;
                            break;
                        case 'king_b':
                            startingX = 4;
                            break;
                    }                   
                }
            }

            const currentPiece = new Piece(id, image, startingX, startingY);
            allPieces.push(currentPiece);

        }    
    }
};


export default allPieces;