var button1 = document.getElementById("clickme1");

let name1 ='IT';

function showMessage1() {
    
    //if condition
    if (name1 === 'IT') {
        console.log('Condition is executed');
    } else {
        console.log('Condition is failed');
    }
    
}

button1.onclick = showMessage1;
