const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById('save-btn')
const countEl = document.getElementById("count-el")
const incBtn = document.getElementById('increment-btn')
const decBtn = document.getElementById('decrement-btn')
const h1=document.getElementById('h1-id')
let count = 0

incBtn.addEventListener('click', increment)
decBtn.addEventListener('click', decrement)
saveBtn.addEventListener('click', save)


function increment() {
    count += 1
    countEl.textContent = count
    h1.textContent = "I just added this text to this element"
}

function decrement() {
    count -= 1
    countEl.textContent = count
    h1.textContent = "I just deducted this text from this element"
}

function save() {
    let countStr = count + " - "
    console.log(countStr)
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    h1.textContent = "I just saved this text to this element"
}

