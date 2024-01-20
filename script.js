window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#ffcc00";
    document.getElementById("navbar").style.color = "#333";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#333";
    document.getElementById("navbar").style.color = "#fff";
  }
}
