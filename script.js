let panels = document.querySelectorAll(".panel")


panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add("active")
    })
});

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove("active")
    })
}

let toggle = document.querySelector(".toggle")


toggle.addEventListener('click',(e)   =>{
    let toggle = document.querySelector
    ("body")
    if(toggle.classList.contains("dark")){
        toggle.classList.remove("dark")
        e.target.innerbody = "dark mode"
        console.log("dark")
    }
    else{
        toggle.classList.add("dark")
        e.target.innerbody = "light mode"
    }
})