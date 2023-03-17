let values = [];
function initialize () {
    document.getElementById("placeOfNav").innerHTML =
    `
        <nav>
            <div>
                <p> Total Count </p>
                <p id="totalCount"></p>
            </div>
            <div>
                <p> Total Items </p>
                <p id="totalItems"></p>
            </div>
        </nav>
    `
    document.getElementById("resetButton").innerHTML = 
    `
        <button id="reset" onclick="reset()"> Reset </button>
    `
    document.getElementById("totalCount").innerHTML = values.reduce((x, y) => x + y, 0);
    document.getElementById("totalItems").innerHTML = values.length;
    document.getElementById("buttonsContainer").innerHTML = values.map( (x, y) => 
        `
        <div class="buttons">
            <p class="count"> ${x == 0 ? "Zero" : x} </p>
            <button class="plus" onclick="increament(${y})"> + </button>
            <button class="minus" onclick="decreament(${y})"> - </button>
            <button class="delete" onclick="Delete(${y})"> Delete </button>
        </div>
    `).join("");
}

function start () {
    let x = document.getElementById("numberOfBoxes").value;
    if (x == '') {
        x = 0;
    }
    x = Math.min(x, 100);
    values = [];
    for (let i = 0; i < x; ++i) {
        values.push(0);
    }
    const e = document.getElementById("enterNumber");
    e.parentElement.removeChild(e);
    initialize();
}

function increament (y) {
    ++values[y];
    initialize();
}

function decreament (y) {
    if (values[y] != 0) {
        --values[y];
        initialize();
    }
}

function Delete (y) {
    values.splice(y, 1);
    initialize();
}

function reset () {
    values = values.map((x) => 0);
    initialize();
}