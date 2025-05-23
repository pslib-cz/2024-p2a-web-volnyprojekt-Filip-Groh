document.addEventListener("DOMContentLoaded", () => {
    const time = parseFloat(window.getComputedStyle(document.body).getPropertyValue("--animation-hamburger").replace("s", ""))
    let hamelmnts = document.querySelectorAll(".hamburger-zone")
    for (const btn of document.querySelectorAll(".hamburger-btn")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            for (const element of hamelmnts) {
                element.classList.toggle("active")
                if (element.classList.contains("active-2")) {
                    element.classList.toggle("active-3")
                    setTimeout(() => {
                        element.classList.toggle("active-2")
                    }, time / 2 * 1000) 
                } else {
                    element.classList.toggle("active-2")
                    setTimeout(() => {
                        element.classList.toggle("active-3")
                    }, time / 2 * 1000) 
                }
            } 
        })
    }
})