// Get the modal
var modal = document.getElementById('myModal', 'myModal1', 'myModal2', 'myModal3', 'myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgJ1  = document.getElementById('myImgJ1');
var img  = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var modalImg = document.getElementById("img01", "img02", "img03", "img04", "img05");
var captionText = document.getElementById("caption", "caption02", "caption03", "caption04");
imgJ1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}