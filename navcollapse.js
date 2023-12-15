window.addEventListener('DOMContentLoaded', () => {
    var nav = getElementsByTagName("nav");
    var navUl = nav.getElementsByTagName("ul");
    var navLi = navUl.getElementsByClassName("navLi");
    var navA = navUl.getElementsByTagName("a");

    var a = getElementsByClassName("navLi-One");
    var b = getElementsByClassName("navLi-Two");
    var c = getElementsByClassName("navLi-Three");
    var d = getElementsByClassName("navLi-Four");
    var e = getElementsByClassName("navLi-Five");

    a.style.display = "none";
    document.getElementsByClassName("toggleNav").addEventListener("click", toggleNav);
    function toggleNav() {
        if(a.style.display == "none") {
            a.style.display = "block";
            /*
            a.style.display = "block";
            b.style.display = "block";
            c.style.display = "block";
            d.style.display = "block";
            e.style.display = "block";
            */
            a.style.boxSizing = "border-box";
            a.style.margin = "none";
            navLi.style.padding = "none";
            navLi.style.height = "10vh";
            navLi.style.width = "100%";
            navLi.style.fontFamily = "Verdana,Arial,sans-serif";
            navLi.style.fontWeight = "bold";
            navLi.style.listStyleType = "none";
            navLi.style.borderBottom = "1px,solid,#ffffff";

            navLi.style.boxSizing = "border-box";
            navLi.style.margin = "none";
            navLi.style.padding = "none";
            navLi.style.height = "10vh";
            navLi.style.width = "100%";
            navLi.style.fontFamily = "Verdana,Arial,sans-serif";
            navLi.style.fontWeight = "bold";
            navLi.style.listStyleType = "none";
            navLi.style.borderBottom = "1px,solid,#ffffff";

            navA.style.color = "#ff99ff";
            navA.style.fontSize = "5vh";
            navA.style.textAlign = "center";
            
        } else {
            navLi.style.display = "none";
            /*
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            */
        }
    }
})