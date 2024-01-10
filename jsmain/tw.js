window.addEventListener('DOMContentLoaded', () => { 
    
    // Toggle Tumbleweed Animation
    var tw = document.getElementById("tumbleWeed");
    document.getElementById("twToggle").addEventListener("click", twToggle);
    function twToggle() {
        if (tw.style.display == "none") {
            tw.style.display = "block";
            tw.style.position = "absolute";
            tw.style.zIndex = "1";
            tw.style.width = "8vh";
            tw.style.height = "8vh";
        } else {
            tw.style.display = "none";
        }
    }

    // Tumbleweed Animation Runs on Page Load
    const twm = setInterval(twMove, 100);
    content = document.getElementById('content');
    var gameWidth = content.getBoundingClientRect().height;
    var twReachedBorder = false;
    tw.style.display = "block";
    document.getElementById("content").addEventListener("load", buffer());
    function buffer() {setInterval(tumbleweedAnimation, 10000);}
     function tumbleweedAnimation() {
        // if tumbleweed element is displayed
        if (tw.style.display == "block") {
            tw.style.top = "0";
            tw.style.left = "0";
            var posX = 0;
            var posY = 0;
            do {
                function twMove() {
                    tw.style.transform = "rotate(15deg)";
                    tw.style.left = (posX + 3) + 'px';
                    tw.style.top = (posY + 3) + 'px';
                }
                if (tw.style.top == gameWidth) {
                    twReachedBorder = true;
                }
            } while (twReachedBorder == false);
            clearInterval(twm);
            /* Parabola Equation For TumbleWeed Animation Path
                f\left(x\right)\ =-x^{2}+1
                g\left(x\right)\ =2\left(.5x-\operatorname{floor}\left(.5x\right)\right)-1
                f\left(g\left(x\right)\right)
            */
        } 
    }
}); 