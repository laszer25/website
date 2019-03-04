
var newparams = {
    "particles": {
      "number": {
        "value": 7,
        "density": {
          "enable": false,
          "value_area": 10
        }
      },
      "color": {
        "value": "#373737"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.35252738096191877,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 15.782952832645451,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 8.011985930952699,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 2484,
          "rotateY": 3845.7532468572954
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  };

function draw() {
 
    window.particlesJS('particle-js', newparams);
    var slideUp = {
      distance: '150%',
      origin: 'bottom',
      opacity: null,
      duration: 1000
    };
  
    ScrollReveal().reveal('.slideup-animation', slideUp);
}

function openNav() {
  console.log("clicked");
  
  var element = document.getElementById("hamburger-menu");
  element.classList.toggle("is-active");
  var slideelement = document.getElementById("slide-menu");
  slideelement.classList.toggle("slide")
  if(element.classList.contains("is-active")){
    document.getElementById("mysidenav").style.width = "100%";
  }
  else{
    document.getElementById("mysidenav") .style.width = "0" ;
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


