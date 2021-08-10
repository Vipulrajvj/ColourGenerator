const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "Maroon", "Teal", "Grey", "Cyan", "Lime", "Navy"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function() {

    const randomnumber = Getrandomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
})

function Getrandomnumber() {
    return Math.floor(Math.random() * colors.length);
}


//const btn gets the btn id from the html file , so when we click the button as given in btn , function is invoked by clicking it as specified in the program
//A fuction is made called get random for selecting a random element form the aray colors
//