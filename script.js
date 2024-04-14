const gewichtInput = document.getElementById('Gewicht');
const größeInput = document.getElementById('Größe');
const größeInMeter = größeInput.value / 100;
const bmiAusgabe = document.getElementById('Bmi');
const bmiKategorie = document.getElementById('Bmi-kategorie');



function berechnen (gewichtInput, größeInMeter) {
  
  let bmiBerechnung = Number(gewichtInput.value / (größeInMeter.value / 100)**2);
 
  if (bmiBerechnung > 0) {
    document.getElementById('Bmi').value = bmiBerechnung
  } else  {
    document.getElementById('Bmi').value = ''
  }

  if (bmiBerechnung > 40) {
    bmiKategorie.textContent = "Sie haben Adipositas Grad 3."
  } else if  (bmiBerechnung < 18.5) {
    bmiKategorie.textContent = "Sie haben Untergewicht."
  } else if (bmiBerechnung < 25) {
    bmiKategorie.textContent = "Sie haben Normalgewicht."
  } else if (bmiBerechnung < 30) {
    bmiKategorie.textContent = "Sie haben übergewicht."
  } else if (bmiBerechnung < 35) {
    bmiKategorie.textContent = "Sie haben Adipositas Grad 1."
  } else if (bmiBerechnung < 40) {
    bmiKategorie.textContent = "Sie haben Adipositas Grad 2."
  }  else { 
    bmiKategorie.textContent = 'Bitte geben sie gültige Zahlen ein'
  }

  gewichtInput.value = '';
  größeInput.value = '';
}


//Load in function

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.move-in');
  var screenHeight = window.innerHeight;

  elements.forEach(function(element) {
      var position = element.getBoundingClientRect().top;
      if (position < screenHeight) {
          element.classList.add('show');
      }
  });
});