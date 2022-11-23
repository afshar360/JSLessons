const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById('save-btn')
const countEl = document.getElementById("count-el")
const incBtn = document.getElementById('increment-btn')
const decBtn = document.getElementById('decrement-btn')
let count = 0

incBtn.addEventListener('click', increment)
decBtn.addEventListener('click', decrement)
saveBtn.addEventListener('click', save)


function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    console.log(countStr)
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

