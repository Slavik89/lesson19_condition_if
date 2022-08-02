var button2 = document.getElementById("clickme2");

let name2 ='IT';

function showMessage2() {
    
    //ternar condition
    name2 === 'IT' ? console.log('Condition is executed') : console.log('Condition is failed');
}

button2.onclick = showMessage2;
