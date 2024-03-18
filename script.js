let images = document.querySelectorAll(".Cards") 
let myInput = document.getElementById("Search")



myInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    images.forEach(card => {
        const isVissible = card.getAttribute("name").toLowerCase().includes(value)
        card.classList.toggle("Hiden", !isVissible)
    })
})

