
//   DARK MODE
  function myFunction() {
    var image =  document.getElementById("button-dark-mode");
    var element = document.body;
    var imgabout = document.getElementsByClassName("img-about")[0];
    var imgabout1 = document.getElementsByClassName("img-about")[1];
    var imgabout2 = document.getElementsByClassName("img-about")[2];
    element.classList.toggle("dark-mode");
    imgabout.classList.toggle("img-about-invert");
    imgabout1.classList.toggle("img-about-invert");
    imgabout2.classList.toggle("img-about-invert");
  
// DARK MODE - TROCA FOTO
 if (image.getAttribute('src') == "./images/img-header/lua.png")
     {
          image.src = './images/img-header/sol.png';
                }
          else
                {
             image.src = './images/img-header/lua.png';
                }
  }

//   FIM DARK MODE