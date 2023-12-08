window.addEventListener('DOMContentLoaded', () => {
    // Background-Music
    var tracks = {
        list: ["audio/wildwest-1.mp3", "audio/wildwest-2.mp3", "audio/wildwest-3.mp3"],
        index: 0,
        next: function () {
            if (this.index == this.list.length - 1) this.index = 0;
            else {
                this.index += 1;
            }
        },
        play: function () {
            return this.list[this.index];
        }
    }

    audio.onended = function () {
        tracks.next();
        audio.src = tracks.play();
        audio.load();
        audio.play();
    }

    audio.src = tracks.play();

    // Tic-Tac-Toe / Tic-Tac-Toe^2 Toggle
    document.getElementById("gameModeToggle").addEventListener("click", gameModeToggle);
    function gameModeToggle() { // If gameModeToggle is activated convert elements to variables using their ID's
        var k = document.querySelectorAll(".tile2");
        var h = document.getElementById("secReset");
        var l = document.getElementById("secReset2");
        var x = document.getElementById("tictactoe");
        var y = document.getElementById("tictactoe2");
        var z = document.getElementById("tictactoeHead");
        var u = document.getElementById("tictactoe2Head");
        var w = document.getElementById("reset");
        var v = document.getElementById("reset2");
        if (x.style.display == "none") { // If element with id 'tictactoe' isn't being displayed
            // Display used elements
            x.style.display = "block";
            z.style.display = "block";
            w.style.display = "block";
            h.style.display = "block";

            // Style used elements
            x.style.width = "fit-content";
            x.style.marginLeft = "auto";
            x.style.marginRight = "auto";
            x.style.padding = "none";
            x.style.marginBottom = "5%";

            w.style.marginLeft = "auto";
            w.style.marginRight = "auto";
            w.style.marginBottom = "2%";
            w.style.paddingTop = "0px";
            
            h.style.marginLeft = "auto";
            h.style.marginRight = "auto";

            // Hide unused elements
            y.style.display = "none";
            u.style.display = "none";
            v.style.display = "none";
            l.style.display = "none";

        } else { // ... otherwise ...
            // Display used elements
            y.style.display = "block";
            u.style.display = "block";
            v.style.display = "block";
            l.style.display = "block";
            
            // Style used elements
            for(var o = 0; o < k.length; o++){
                k[o].style.display = "block";
                k[o].style.height = "5%";
                k[o].style.width = "5%";
            }

            v.style.marginLeft = "auto";
            v.style.marginRight = "auto";
            v.style.marginBottom = "2%";
            v.style.paddingTop = "0px";

            l.style.marginLeft = "auto";
            l.style.marginRight = "auto";

            // Hide unused ulements
            x.style.display = "none";
            z.style.display = "none";
            w.style.display = "none";
            h.style.display = "none";
        }
        resetBoard;
    }


    // Singleplayer / Multiplayer Toggle
    function playerModeToggle() {
        
    }

    // Constants / Variables
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Procedures
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === "" || b === "" || c === "") {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes("")) announce(TIE);
    }

    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    };

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    resetButton.addEventListener('click', resetBoard);
});