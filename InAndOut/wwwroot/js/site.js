// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function increment(obj) {
    var id = obj.id



    var btn = document.getElementById(id)


    var out = parseInt(btn.innerText)
    var x = Math.random() * 256
    var y = Math.random() * 256
    var z = Math.random() * 256
    btn.style.background = "rgb(" + x + "," + y + "," + z + ")"
    out++;
    btn.innerText = out;
    if ((x + y + z) < ((255 * 3) / 2)) {
        btn.style.color = "white"
    }
    else {
        btn.style.color = "black"
    }



}