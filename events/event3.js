var count = 0;
// var colors = ["red","green","blue","yellow","purple","orange","pink"]

function generateRandomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    // Construct the CSS color string
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return color;
  }

const changeColor = () => {


    //gen random number

    // var random = Math.floor(Math.random() * colors.length);
    // console.log(random);
    // console.log(colors[random]);
    // var mydiv = document.getElementById("mydiv");
    // mydiv.style.backgroundColor = colors[random];

    var color = generateRandomColor();
    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = color;



}