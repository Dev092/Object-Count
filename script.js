//document.getElementById("count-el").innerText=4;
let count = 0;

let one=document.getElementById("count-el")
function clicked() {
    count++;
    one.innerText = count;
}


let one2=document.getElementById("count-el")
function decclicked()
{
    count=count-1;
    one2.innerText=count;
}


let string="";
let half=document.getElementById("sv-see")
function saveMe()
{
    string=string + count + " -   "
    //console.log(count);
    half.textContent=string;
    count=0;
    one.textContent =  0;
   // document.getElementById("sv-see").innerText=string;
}