



var modal = document.getElementById('popUp');


var btn = document.getElementsByClassName("modalbutton")[0];


var span = document.getElementsByClassName("close")[0];




function modalBlock(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

