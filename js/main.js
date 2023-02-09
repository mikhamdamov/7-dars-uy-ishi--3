

let img = document.querySelector("img");

setInterval(
  () => {
    let attr = img.getAttribute("src");

    if (attr === "./img/l.png") {
      img.setAttribute("src", "./img/o.png");
    } else if (attr === "./img/o.png") {
      img.setAttribute("src", "./img/p.png");
    } 
    else if (attr === "./img/p.png") {
      img.setAttribute("src", "./img/i.png");
    }
    else if (attr === "./img/i.png") {
        img.setAttribute("src", "./img/l.png");
    }
    else if (attr === "./img/l.png") {
      img.setAttribute("src", "./img/l.png");
    }
    // else if (attr === "./img/l.png") {
    //   img.setAttribute("src", "./img/l.png");
    // }
    else{
        img.setAttribute("src", "./img/l.png");
    }
  },

  1000
);
