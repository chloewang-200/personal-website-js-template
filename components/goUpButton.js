window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > document.body.scrollHeight / 4 || document.documentElement.scrollTop > document.documentElement.scrollHeight / 3) {
    document.getElementById("goUpButton").style.display = "block";
  } else {
    document.getElementById("goUpButton").style.display = "none";
  }
}

document.getElementById("goUpButton").addEventListener("click", function(){
    // Updated scroll to top functionality
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
