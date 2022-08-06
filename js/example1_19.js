var button4 = document.getElementById("example1");

let age1 = 23;

function showMessage4() {
    
    //if and else if
    if (age1 < 18) {
        console.log('Mission is not exetuted');
    } else if (age1 === 18) {
       console.log('Mission is exetuted'); 
    } else if (age1 > 18) {
        console.log('Місія провалена');
    }
}

button4.onclick = showMessage4;