var night;

var tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

$(function () {
    $("#frame-placeholder").load("https://josephinel6.github.io/old-portfolio/frame.html");
});


window.onload = function () {
    var night = false;
    var night = true;
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
    console.log("dark")
    document.getElementById("homepage").style.display = "block";
}

function viewpage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById("viewmarkdown").style.display = "block";
    document.getElementById("viewmarkdown").src = "https://josephinel6.github.io/old-portfolio/" + pageName + ".md";

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openpage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     //   tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function daynight() {
    var daynight = document.getElementById("day-night");
    if (night == true) {
        daynight.classList.remove("fa-sun-o");
        daynight.classList.add("fa-moon-o");
        night = false;
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
    }
    else {
        daynight.classList.remove("fa-moon-o");
        daynight.classList.add("fa-sun-o");
        night = true;
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
    }
}
