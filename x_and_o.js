const playcell_1 = document.querySelector(".play_cell_1");
const playcell_2 = document.querySelector(".play_cell_2");
const playcell_3 = document.querySelector(".play_cell_3");
const playcell_4 = document.querySelector(".play_cell_4");
const playcell_5 = document.querySelector(".play_cell_5");
const playcell_6 = document.querySelector(".play_cell_6");
const playcell_7 = document.querySelector(".play_cell_7");
const playcell_8 = document.querySelector(".play_cell_8");
const playcell_9 = document.querySelector(".play_cell_9");

let player_turn_cell_1 = true;
let player_turn_cell_2 = true;
let player_turn_cell_3 = true;
let player_turn_cell_4 = true;
let player_turn_cell_5 = true;
let player_turn_cell_6 = true;
let player_turn_cell_7 = true;
let player_turn_cell_8 = true;
let player_turn_cell_9 = true;

let turn = "x";

playcell_1.addEventListener("click", function (e) {
    if (player_turn_cell_1 === true && turn === "x") {
        playcell_1.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_1 = false;
        turn = "o";
        return player_turn_cell_1;
    } else if (player_turn_cell_1 === true && turn === "o") {
        playcell_1.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_1 = false;
        turn = "x";
        return player_turn_cell_1;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_2.addEventListener("click", function (e) {
    if (player_turn_cell_2 === true && turn === "x") {
        playcell_2.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_2 = false;
        turn = "o";
        return player_turn_cell_2;
    } else if (player_turn_cell_2 === true && turn === "o") {
        playcell_2.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_2 = false;
        turn = "x";
        return player_turn_cell_2;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_3.addEventListener("click", function (e) {
    if (player_turn_cell_3 === true && turn === "x") {
        playcell_3.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_3 = false;
        turn = "o";
        return player_turn_cell_3;
    } else if (player_turn_cell_3 === true && turn === "o") {
        playcell_3.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_3 = false;
        turn = "x";
        return player_turn_cell_3;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_4.addEventListener("click", function (e) {
    if (player_turn_cell_4 === true && turn === "x") {
        playcell_4.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_4 = false;
        turn = "o";
        return player_turn_cell_4;
    } else if (player_turn_cell_4 === true && turn === "o") {
        playcell_4.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_4 = false;
        turn = "x";
        return player_turn_cell_4;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_5.addEventListener("click", function (e) {
    if (player_turn_cell_5 === true && turn === "x") {
        playcell_5.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_5 = false;
        turn = "o";
        return player_turn_cell_5;
    } else if (player_turn_cell_5 === true && turn === "o") {
        playcell_5.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_5 = false;
        turn = "x";
        return player_turn_cell_5;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_6.addEventListener("click", function (e) {
    if (player_turn_cell_6 === true && turn === "x") {
        playcell_6.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_6 = false;
        turn = "o";
        return player_turn_cell_6;
    } else if (player_turn_cell_6 === true && turn === "o") {
        playcell_6.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_6 = false;
        turn = "x";
        return player_turn_cell_6;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_7.addEventListener("click", function (e) {
    if (player_turn_cell_7 === true && turn === "x") {
        playcell_7.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_7 = false;
        turn = "o";
        return player_turn_cell_7;
    } else if (player_turn_cell_7 === true && turn === "o") {
        playcell_7.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_7 = false;
        turn = "x";
        return player_turn_cell_7;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_8.addEventListener("click", function (e) {
    if (player_turn_cell_8 === true && turn === "x") {
        playcell_8.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_8 = false;
        turn = "o";
        return player_turn_cell_8;
    } else if (player_turn_cell_8 === true && turn === "o") {
        playcell_8.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_8 = false;
        turn = "x";
        return player_turn_cell_8;
    } else {
        window.alert("cell already clicked");
    }
});

playcell_9.addEventListener("click", function (e) {
    if (player_turn_cell_9 === true && turn === "x") {
        playcell_9.innerHTML = "<text class='cross'>&#x2716;</text>";
        player_turn_cell_9 = false;
        turn = "o";
        return player_turn_cell_9;
    } else if (player_turn_cell_9 === true && turn === "o") {
        playcell_9.innerHTML = "<text class='circle'>&#x25EF;</text>";
        player_turn_cell_9 = false;
        turn = "x";
        return player_turn_cell_9;
    } else {
        window.alert("cell already clicked");
    }
});


function newGame() {
    player_turn_cell_1 = true;
    player_turn_cell_2 = true;
    player_turn_cell_3 = true;
    player_turn_cell_4 = true;
    player_turn_cell_5 = true;
    player_turn_cell_6 = true;
    player_turn_cell_7 = true;
    player_turn_cell_8 = true;
    player_turn_cell_9 = true;

    turn = "x";

    playcell_1.innerHTML = "";
    playcell_2.innerHTML = "";
    playcell_3.innerHTML = "";
    playcell_4.innerHTML = "";
    playcell_5.innerHTML = "";
    playcell_6.innerHTML = "";
    playcell_7.innerHTML = "";
    playcell_8.innerHTML = "";
    playcell_9.innerHTML = "";
}