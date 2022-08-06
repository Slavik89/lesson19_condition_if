var button3 = document.getElementById("clickme3");

let age = 18;

function showMessage3() {
    
    //if and else if
    if (age < 18) {
        console.log('Mission is not exetuted');
    } else if (age === 18) {
       console.log('Mission is exetuted'); 
    } else if (age > 18) {
        console.log('Mission is failed');
    }
}

button3.onclick = showMessage3;
