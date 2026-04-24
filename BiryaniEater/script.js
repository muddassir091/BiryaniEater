document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text")
    const button = document.getElementById("btn")

    let count = Number(localStorage.getItem("count")) ||0

    text.textContent = `You Ate ${count} Plates of Biryani`

    button.addEventListener("click", function() {
        count++
        text.textContent = `You Ate ${count} Plates of Biryani`
        localStorage.setItem("count", count)
    })
})