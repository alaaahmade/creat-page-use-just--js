
// \\\\\\\\\\\\\\\\\\create Headers\\\\\\\\\\\\\\\\\\ //

let head = document.createElement("header")
let margin = "20px 10px"
let nav = document.createElement("div")
let home = document.createElement("a")
let about = document.createElement("a")
let service = document.createElement("a")
let contact = document.createElement("a")
let elzero = document.createElement("div")

elzero.textContent = "Elzero"
head.appendChild(elzero)
home.textContent = "Home"
about.textContent = "About"
service.textContent = "Service"
contact.textContent = "Contact"
nav.appendChild(home)
nav.appendChild(about)
nav.appendChild(service)
nav.appendChild(contact)
head.appendChild(nav)
nav.children[0].style = `text-align: center; margin: 0 10px ;font-size : 12px`
nav.children[1].style = `text-align: center; margin: 0 10px;font-size : 12px`
nav.children[2].style = `text-align: center; margin: 0 10px;font-size : 12px`
nav.children[3].style = `text-align: center; margin: 0 10px;font-size : 12px`
nav.style.margin = margin
head.style= `align-items: flex-end;`
elzero.style.margin =margin;
elzero.style.color ="#23a96e";
elzero.style.fontWeight ="bold";
document.body.appendChild(head)
head.style = `display:flex;
text-align: center;
justify-content: space-between;
height : 50px ;
background-color : white`
document.body.style = `background-color : white;height : 100vh ;`

// \\\\\\\\\\\\\\\\\\\\\\\create contents \\\\\\\\\\\\\\\\\\\\\\\\ //

let contain = document.createElement("div")
let container = document.createElement("div")
container.classList.add("container")
contain.classList.add("contain")

container.style.backgroundColor = "#eee"
container.style.padding = " 10px 10px"
container.appendChild(contain)
contain.style = `
display:grid ;
grid-template-columns : repeat(3, 1fr);
gap:10px;
grid-template-rows : repeat(5, 90px);

`
for(let i =1 ; i < 16; i++){
    let divs = document.createElement("div")
    divs.classList.add("divnum")
    let text = document.createTextNode("Product")
    let span = document.createElement("span")
    span.classList.add("span")
    span.textContent = i
    divs.appendChild(span)
    divs.appendChild(text)
    console.log(divs)
    contain.appendChild(divs)
    span.style.fontSize = "25px"
    divs.style = `background-color :white;
    display:flex;
    flex-direction: column; 
    text-align:center;
    justify-content:center ;
    font-size: 8px;
    border-radius: 5px;`;
}
document.body.appendChild(container)

// \\\\\\\\\\\\\\\\\\\\\\\create footer \\\\\\\\\\\\\\\\\\\\\\\\ //

let foot = document.createElement("footer")
foot.textContent = "Copyright 2021"
foot.style = `
background-color: #23a96e;
padding : 10px 0 ;
color : white;
text-align : center;

`
document.body.appendChild(foot)

















