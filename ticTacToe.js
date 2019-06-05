// alert("HELLO!")
// console.log("sanity check")
// ** above are good ways to check and make sure JS is linked to HTML correctly

let game = ['-','-','-','-','-','-','-','-','-'];
let turn = `O`;

function placeMarker(boxNumber) {
    const box = document.getElementById('box'+boxNumber);
    if(box.innerHTML === '-'){
        if(turn == 'O') {
            turn = 'X';
            box.innerHTML = turn;
            box.style.color = 'white';
        } else if(turn === 'X') {
            turn = 'O';
            box.innerHTML = turn;
            box.style.color = 'white';
        }
    }





    // if(box.innerHTML == ''){
    // one equal sign assigns
    // two equals signs checks true/false
    // three equals checks for type and content
    //     box.innerHTML = playerX;
    // } else {
    //     box.innerHTML = playerO;
    // }
    // box.innerHTML = `X`;

    // console.log(box);
    // can use console.logs to check functions throughout - but then delete them

    // box.innerHTML = `X`
    // *template literal above - makes putting text on page easier in JS
}

