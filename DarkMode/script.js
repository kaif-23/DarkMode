const toggleSwitch=document.querySelector("#theme-toggle")
const body=document.body;
toggleSwitch.addEventListener('click',()=>{
    body.classList.toggle('dark-mode')
    toggleSwitch.classList.toggle('dark-mode')
    toggleSwitch.innerText="dark mode"
})