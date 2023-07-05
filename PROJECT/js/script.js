var images = document.querySelectorAll('.slider img');
var currentImage = 0;
var slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

function nextSlide() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}
window.addEventListener('load', function() {
    nextSlide();
  });


function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var email = document.forms["message-form"]["email"].value;
  var select = document.forms["message-form"]["select"].value;

  if (name == "" || email == "" || select == "") {
    alert("Form tidak Boleh Ada Yang Kosong.");
    return false
  }

  document.getElementById("success").innerText = "BERHASIL TERKIRIM";
  return false
}