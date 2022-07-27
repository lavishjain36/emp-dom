// document.getElementById("parag").innerHTML = `<h1>Hello folks</h1>`

// let pelement=document.getElementsByTagName("p");
// document.getElementById("parag").innerHTML ="The innerHtml paragraph is: "+pelement[1].innerHTML;


//created an new element p tag
// let para=document.createElement("p");
// let node=document.createTextNode("This is new paragraph");
// para.appendChild(node);

//merge the new element with the existing element
// let divelement=document.getElementById("parag");
// divelement.appendChild(para);


// function myfun(){

// let h1element=document.getElementById("heading");
// h1element.innerHTML=`<h1>Hello folks</h1>`;
// h1element.style.color="red";
// h1element.style.backgroundColor="yellow";
// h1element.style.fontSize="50px";
// }
// Finding the HTML element
// document.getElementById(id)=>select an element by element id
// document.getElementsByTagName(tag)=>find element by tag name
// document.getElementsByClassName(classname)=>find element by class name

// Adding and Deletion element 
// document.createElement(element)=>create element
// document.removeChild(element)=>remove element
// document.appendChild(element)=>append element
// document.replaceChild(element,oldelement)=>replace element
// text="hello"
// document.write(text)=>write text in the page

// document.getElementById(id).onclick=function(){
//  //Business Logic 
// }



// document.getElementsByClassName("btn")[0].addEventListener("click",function(){
// //Logic 
// // document.getElementsByClassName("list-item")[0].innerHTML="<h1>Hello</h1>";
// // document.getElementsByClassName("list-item")[0].style.color = "red";
// let listitem=document.getElementsByClassName("list-item");
// // // console.log(listitem);
// // let first=listitem.length
// // console.log(first);

// for(let i=0;i<listitem.length;i++){
//     listitem[i].innerHTML="<h1>Hello</h1>";
//     listitem[i].style.color = "red";
//     listitem[i].style.backgroundColor = "yellow";
//     listitem[i].style.fontSize = "50px";

// }

// })


// Select list element with tag
// let liElement = document.getElementsByTagName("li");
// console.log(liElement);
// let totalLength = liElement.length;
// console.log(totalLength);

// let firstElement=liElement[0].innerHTML;
// console.log(firstElement);
// let last=liElement[totalLength-1].innerHTML;
// console.log(last);


//Query SelectorAll
// it is a powerful method to select all the element matching attributes
let liElement = document.querySelectorAll("ol li.test");
console.log(liElement);
//Select first element
let firstElement=liElement[0].innerHTML;
console.log(firstElement);