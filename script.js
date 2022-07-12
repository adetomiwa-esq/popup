const popup = document.querySelector("#popup")

const btn = document.querySelector(".btn")



const remove = document.querySelector(".popdown")
remove.addEventListener("click", removePopup)

function removePopup(e){
    popup.classList.add("remove")
}

btn.addEventListener("click", show)
function show(e){
    //popup.classList.add("pop")
    popup.classList.remove("remove")
}