window.addEventListener('DOMContentLoaded', () => {
    let navLi = document.getElementsByClassName('navLi');
    for (let i = 0; i < navLi.length; i++) {
        navLi[i].classList.add("displaynone");
    }
    document.getElementById("toggleNav").addEventListener("click", toggleNav);
    function toggleNav() {
        if (navLi[1].classList.contains("naviLi")) {
            for (let i = 0; i < navLi.length; i++) {
                navLi[i].classList.remove("displaynone");
                navLi[i].classList.add("naviLi");
            }
        } else {
            for (let i = 0; i < navLi.length; i++) {
                navLi[i].classList.remove("naviLi");
                navLi[i].classList.add("displaynone");
            }
        }
    }
})