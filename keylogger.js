let logDiv = document.getElementsByClassName('log')[0];
let stateDiv = document.getElementsByClassName('state')[0];
let startBtn = document.getElementsByClassName('start')[0];
let stopBtn = document.getElementsByClassName('stop')[0];

startBtn.addEventListener('click', () => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
});

stopBtn.addEventListener('click', () => {
    document.removeEventListener('keydown', keyDownHandler);
    document.removeEventListener('keyup', keyUpHandler);
    logDiv.textContent = "";
    stateDiv.textContent = "";
});

function keyDownHandler(e) {
    console.log(e.key);
    logDiv.textContent = `Key ${e.key} was pressed Down`;
    stateDiv.textContent = `Key is Down`;
}

function keyUpHandler(e) {
    logDiv.textContent = `Key ${e.key} was pressed Up`;
    stateDiv.textContent = `Key is Up`;
}

// handleChange
let inp = document.querySelector('input');
let para = document.querySelector('.para');
let clr = document.querySelector('.clr');
function handleChange() {
    const inputVal = inp.value;
    para.textContent = inputVal;
}
function clearInput() {
    inp.value = "";
    para.textContent = "";
}
inp.addEventListener("input", handleChange);