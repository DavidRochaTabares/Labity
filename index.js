const text1_options = [
    "Krooper",
    "KingFLight",
    "CiscoMood",
    "McQueen"
  ];
  const text2_options = [
    "Productor. Artista",
    "Artista",
    "Artista",
    "Productor"
  ];
  const color_options = ["#6E675F", "#F35B04", "#FDE74C", "#F35B04"];
  const image_options = [
    "Imagenes/Krooper.jpg",
    "Imagenes/kingflight.jpg",
    "Imagenes/ciscomood.jpg",
    "Imagenes/mcqueen.jpg"
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  currentOptionImage.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);
  currentOptionText1.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  currentOptionText1.style.cursor = 'pointer';
  currentOptionImage.style.cursor = 'pointer';
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;

    currentOptionImage.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);
    currentOptionText1.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;

    currentOptionImage.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);
    currentOptionText1.setAttribute('onclick',`profileArtist('${text1_options[i]}');`);

    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };

  /* Apertura de ventanas */ 

  function profileArtist(nombreArtista) {
    window.open(`${nombreArtista}.html`,'_self');
  }

  /* Menu hamburguesa */

  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }