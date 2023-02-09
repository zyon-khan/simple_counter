let storedCount = localStorage.getItem("count")

console.log(storedCount)

let count = 0;

if (storedCount !== null) {
    count = Number(storedCount)
}

let counterText = document.getElementById("counter-text")
counterText.innerText = count

let errorElement = document.getElementById("negative-error");
errorElement.style.display = "none"

function increment() {
    count += 1;
    localStorage.setItem("count", count)
    counterText.innerText = count
    errorElement.style.display = "none";
}

function reset() {
    count = 0;
    counterText.innerText = 0;
    errorElement.style.display = "none";
    localStorage.clear();
}

function decrement() {

    if (count <= 0) {
        errorElement.style.display = "block"
    }
    else if (count !== 0) {
        count -= 1;
        localStorage.setItem("count", count)
        counterText.innerText = count;
    }
}


