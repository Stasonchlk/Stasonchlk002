window.onscroll = function() {myFunction1()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction1() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//перебор по назаванию
function myFunction2() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}


//перебор по размеру
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//прокрутка поиск
function fun4() {
    var range = document.getElementById('r1');
    var i1 = document.getElementById('i1');
    i1.value=range.value;
}

function fun5() {
    var range = document.getElementById('t1');
    var u1 = document.getElementById('u1');
    u1.value=range.value;
}


//подбор пары
function switchC() {
    const f = document.querySelector(".parfou");
    const s = document.querySelector(".parfou2");
    f.classList.remove("block");
    s.classList.add("block");
}
function switchv() {
    const f = document.querySelector(".parfou2");
    const s = document.querySelector(".parfou3");
    f.classList.remove("block");
    s.classList.add("block");
}
function switchb() {
    const f = document.querySelector(".parfou3");
    const s = document.querySelector(".parfou4");
    f.classList.remove("block");
    s.classList.add("block");
}
function switchn() {
    const f = document.querySelector(".parfou4");
    const s = document.querySelector(".parfou5");
    f.classList.remove("block");
    s.classList.add("block");
}

//корзина
function addToCart(item) {
    var cart = document.getElementById("card");
    var newItem = document.createElement("div");
    newItem.innerHTML = item.innerHTML;
    cart.appendChild(newItem);
}




