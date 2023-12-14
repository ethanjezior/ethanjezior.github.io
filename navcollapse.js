window.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName("toggleNav").addEventListener("click", toggleNav);
    function toggleNav() {
        var a = getElementsByClassName("navLi-One");
        var b = getElementsByClassName("navLi-Two");
        var c = getElementsByClassName("navLi-Three");
        var d = getElementsByClassName("navLi-Four");
        var e = getElementsByClassName("navLi-Five");
        if(a.style.display == "none") {
            a.style.display = "block";
            b.style.display = "block";
            c.style.display = "block";
            d.style.display = "block";
            e.style.display = "block";
            
            a.style.height = ""
        } else {
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
    }
})