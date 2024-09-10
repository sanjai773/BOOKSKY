//selecting for change display property to blok of popup box

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select delete button

var cancelpopup=document.getElementById("cancel-popup")

 //because when we click the delete button it refreshes the page automatically

cancelpopup.addEventListener("click",function(event){
        event.preventDefault()   
        popupoverlay.style.display="none"
        popupbox.style.display="none"     
})

//selecting book container,add book,book title,short description as "b" and author as "a"

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("a")
var bookauthorinput=document.getElementById("book-author-title")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitleinput.value}</h2><h5>${a.value}</h5><p>${b.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
   
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
