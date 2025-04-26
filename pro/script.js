// supa = document.getElementById("btn");

// function myfunction(){
    
//     // document.body.style.backgroundColor = "black";
//     // supa.innerText = "Light mode";
//     document.getElementById("body").style.backgroundColor = "black";
// }

// function myfunction1(){
//     document.getElementById("body").style.backgroundColor = "white";
// }


let isDarkMode = false;
const btn = document.getElementById("btn");

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.getElementById("body");
    
    if (isDarkMode) {
        body.style.backgroundColor = "black";
        // body.style.color = "white";
        btn.innerText = "Dark mode";
    } else {
        body.style.backgroundColor = "white";
        // body.style.color = "#333";
        btn.innerText = "Light mode";
    }
}
