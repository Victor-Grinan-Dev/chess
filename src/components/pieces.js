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
    ["knigth", 2],
    ["bishop", 2],
    ["queen", 1],
    ["king", 1],
];

for(let color = 0; color < piecesColor.length; color++){
    for(let piecesType  = 0; piecesType < piecesNames.length; piecesType++ ){
        for(let amount = piecesNames[piecesType][1]; amount > 0; amount--){

            let id;

            if(piecesNames[piecesType][0] === "queen" || piecesNames[piecesType][0] === "king"){
                id = piecesNames[piecesType][0] + piecesColor[color];
            }else{
                id = piecesNames[piecesType][0] + amount + piecesColor[color];
            }
            
            const image = `assets/${piecesNames[piecesType][0] + piecesColor[color]}.png`;
            const currentPiece = new Piece(id, image);

            allPieces.push(currentPiece);

        }
    }
}
allPieces.forEach(p => console.log(p.id, p.image))


/*
const pawns_w = Array(8).fill(piece).map((p, i) => {
    p.id = `pawn${i+1}_w`;
    p.image = "assets/pawn_w.png";
    p.x = i;
    p.y = 1;
});

const pawns_b = Array(8).fill(piece).map((p, i) => {
    p.id = `pawn${i+1}_w`;
    p.image = "assets/pawn_w.png";
    p.x = i;
    p.y = 1;
});
*/

export default allPieces;