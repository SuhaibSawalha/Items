let values = [];
let disablity = [];
let initializeCalls = 0;
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
        <div class="buttons${initializeCalls == 0 ? 0 : ''}">
            <p class="count"> ${x == 0 ? "Zero" : x} </p>
            <button class="plus" onclick="increament(${y})"> + </button>
            <button ${disablity[y] === true ? "disabled=true" : ""} id="minus-${y}" class="minus" onclick="decreament(${y})"> - </button>
            <button class="delete" onclick="Delete(${y})"> Delete </button>
        </div>
    `).join("");
    ++initializeCalls;
}

document.getElementById("numberOfBoxes").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        start();
    }
});

function start () {
    let x = document.getElementById("numberOfBoxes").value;
    if (x == '') {
        document.getElementById("numberOfBoxes").style.border = "2px solid red";
        document.getElementById("requiredMessege").innerHTML = "*it's required";
        return;
    }
    x = Math.min(x, 100);
    values = [];
    for (let i = 0; i < x; ++i) {
        values.push(0);
        disablity.push(true);
    }
    const e = document.getElementById("enterNumber");
    e.parentElement.removeChild(e);
    initialize();
}

function increament (y) {
    disablity[y] = false;
    ++values[y];
    initialize();
}

function decreament (y) {
    --values[y];
    if (values[y] === 0) {
        disablity[y] = true;
    }
    initialize();
}

function Delete (y) {
    values.splice(y, 1);
    disablity.splice(y, 1);
    initialize();
}

function reset () {
    values = values.map((x) => 0);
    disablity = disablity.map((x) => true);
    initialize();
}
