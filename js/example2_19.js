var button5 = document.getElementById("example2");

let user = {
    name: "John",
    age: 30,
    weight: "75 kg",
    height: null,
};

function showMessage5() {
    console.log(user.name);
}

button5.onclick = showMessage5;
