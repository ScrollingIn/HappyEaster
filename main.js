let homediv = document.getElementById('homediv');
let home = document.getElementById('home');
let aboutdiv = document.getElementById('aboutdiv');
let about = document.getElementById('about');
let header = document.getElementById('header');
let productsdiv = document.getElementById('productsdiv');
let contactdiv = document.getElementById('contactdiv');

document.getElementById('about').addEventListener('click', function () {

    if (aboutdiv.style.display === "none") {
        homediv.style.display = "none";
        aboutdiv.style.display = "block";
        productsdiv.style.display = "none";
        contactdiv.style.display = "none";
    }
})

document.getElementById('home').addEventListener('click', function () {

    if (homediv.style.display === "none") {
        homediv.style.display = "block";
        aboutdiv.style.display = "none";
        productsdiv.style.display = "none";
        contactdiv.style.display = "none";
    } 
})

document.getElementById('products').addEventListener('click', function() {
    if (productsdiv.style.display === "none") {
        homediv.style.display = "none";
        aboutdiv.style.display = "none";
        productsdiv.style.display = "block";
        contactdiv.style.display = "none";
    }
})

document.getElementById('contact').addEventListener('click', function(){
    if (contactdiv.style.display === "none") {
        homediv.style.display = "none";
        aboutdiv.style.display = "none";
        productsdiv.style.display = "none";
        contactdiv.style.display = "block";
    }
})