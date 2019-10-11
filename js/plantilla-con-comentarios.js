particlesJS('particles-js',
  {
    /*----------------------------------
     PROPIEDADES DE PARTÌCULAS Y LÍNEAS. 
    ------------------------------------*/
    "particles": {
       //NÚMEROS DE PARTÍCULAS -------------------
      "number": {
        "value": 80, //Número de partículas
        "density": {
          //SI o NO. Cada cuantos pixeles se mostraran "80" particulas
          "enable": true,
          "value_area": 800
        }
      },
       // COLORES -------------------
      "color": {
        // Color de las partículas. Colores en sistema Hex, RGB, HSL, palabra clave como random
        //Mas de un color, dentro de un array.
        "value": "#3DFF3E"
      },
      // FORMA DE LAS PARTÍCULAS -------------------
      "shape": {
        "type": "circle",
        // Val: circle | edge | triangle | polygon | star | image. Se pueden combinar en un array
        "stroke": {
          "width": 0, //Ancho del borde de las particulas
          "color": "#000000" //Color de borde en hexadecimal
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": { //Si shape.type = image, mostrar la sig. imagen
          "src": "",//Ruta de la img. Formato svg,png,gif,jpg
          "width": 100, //Alto de la img
          "height": 100 //Ancho de la img
        }
      },
      //OPACIDAD DE LAS PARTÍCULAS --------------------
      "opacity": {
        "value": 0.5, //Cantidad de opacidad. De 0 (transparente) a 1 (solido)
        "random": false, //Booleano. Hace que algunas partículas sean transparentes, si ya lo son, las invierte. 
        // Animaciones
        "anim": {
          "enable": false, //Habilitar animación. 
          "speed": 1, // Velocidad. Más alto, mas rápido. 
          "opacity_min": 0.1, //Opacidad miníma. 
          "sync": false //sincronizar animación y al parecer invierte la animación entre partículas. 
        }
      }, 
      // TAMAÑO DE PARTÍCULAS --------------------
      "size": {
        "value": 5, // Tamaño
        "random": true,  // Mismo tamaño =fasle, diferente tamaño=true
        //Anamaciones
        "anim": {
          "enable": false, //Alternar el tamaño =true;
          "speed": 40, //Velocidad de la animación
          "size_min": 0.1, //Tamaño minímo
          "sync": false
        }
      },
      // LÍNEAS  --------------------
      "line_linked": {
        "enable": true, 
        "distance": 150, // Longitud de las líneas
        "color": "#3DFF3E", //Color en hexadecimal.
        "opacity": 0.4, //Opacidad
        "width": 1 //Ancho de la línea
      },
      // MOVER PARTÍCULAS & LÍNEAS --------------------
      "move": {
        "enable": true, //Siempre con el valor true
        "speed": 6, //Velociada con la que se mueven. 
        "direction": "none", //Dirección. Val: none | top | top-right | right | bottom-right | bottom | bottom-left | left | top-left
        "random": false,
        "straight": false,//True= Movimiento en un solo sentido. Depende del valor que tenga la propiedad direction. 
        "out_mode": "out", //Modo de salida. Val: bounce (rebotan al topar con el borde del lienzo) | out (salen del lienzo)
        "attract": { //Atraer
          "enable": false,
          "rotateX": 600, //Movimiento horizontal de partículas &  líneas. Depende del tamaño de la líneas.
          "rotateY": 1200 //Moviemiento vertical de partículas &  líneas. Depende del tamaño de la líneas.
        }
      }
    },
    /*----------------------------------
     EVENTOS DE PARTÌCULAS Y LÍNEAS. 
    ------------------------------------*/
    "interactivity": {
      "detect_on": "canvas", //Val: canvas | windows
      // EVENTOS -------------------
      "events": {
        // MOUSE ENCIMA 
        "onhover": {
          "enable": true,
          "mode": "repulse" //Val: grab| bubble| repulse | combinacion de las anteriores en un array
        },
        //MOUSE CLICK
        "onclick": {
          "enable": true,
          "mode": "push"//Val: push(pone nuevas particualas y líneas), remove (elimina partículas y líneas), bubble (como que se inflan), repulse(alteracion cuando el puntero esta dentro del lienzo. Tranquilas cuando esta fuera)
        },
        "resize": true
      },
      // MODOS -------------------
      "modes": {
        //Agarre
        "grab": {
          "distance": 400, //Distancia de agarre
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2, // En segundos
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);