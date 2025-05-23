document.addEventListener("DOMContentLoaded", () => {
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
                    }, 250) 
                } else {
                    element.classList.toggle("active-2")
                    setTimeout(() => {
                        element.classList.toggle("active-3")
                    }, 250) 
                }
            } 
        })
    }
})