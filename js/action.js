var p = document.querySelectorAll('p');

for(var i = 0; i < p.length; i++) {
    p[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
 return function() {
     if(p[i].innerText == "LOL") p[i].innerText = "KEK";
     else p[i].innerText = "LOL";
 }
 };
