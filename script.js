var h1 = document.createElement('h1')
h1.innerHTML="Write Your Thoughts Here"

h1.classList.add("h1")
 var box = document.querySelector(".box")
 box.appendChild(h1)

  let textarea = document.querySelector('textarea')
let count =0;
 let countdisplay= document.querySelector(".count span")
 textarea.addEventListener("keydown", function(){
    if(event.key === 'Backspace'){
        if(count>0)
        count--;
    }
    else{
        if(event.key===' ' || event.key ==='Enter')
    count++;
    }
countdisplay.textContent=count
 })


 let character =0;
 let characterdisplay = document.querySelector(".character span")
textarea.addEventListener("keydown", function(){
    if(event.key ==='Backspace'){
        if(character>0)
        character--;
    }
    else{
        if (event.key !== ' ' ){
            character++
        }

    }
    characterdisplay.textContent=character
 })