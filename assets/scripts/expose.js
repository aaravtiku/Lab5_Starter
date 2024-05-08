// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){
  var typeOfHorn = document.getElementById('horn-select');
  var audio = document.querySelector('audio');
  var volumeChange = document.getElementById('expose').querySelector('img');


  typeOfHorn.addEventListener('change', function(){
    if(typeOfHorn.value == 'air-horn'){
      audio.src = 'assets/audio/air-horn.mp3';
      volumeChange.src = '/assets/images/air-horn.svg'

    }
    else if(typeOfHorn.value == 'car-horn'){
      audio.src = 'assets/audio/car-horn.mp3';
      volumeChange.src = '/assets/images/car-horn.svg'
    }
    else if(typeOfHorn.value == 'party-horn'){
      audio.src = 'assets/audio/party-horn.mp3';
      volumeChange.src = '/assets/images/party-horn.svg'
    }
  });

  var volumeInput = document.getElementById('volume');

  volumeInput.addEventListener('input', function(){
      var volumeValue = volumeInput.value;

      var volumeLevel = 0;

      if(volumeValue == 0){
        volumeLevel = 0;
      }
      else if(volumeValue < 33){
        volumeLevel = 1;
      }
      else if(volumeValue < 67){
        volumeLevel = 2;
      }
      else{
        volumeLevel = 3;
      }

      var volumeIcon = document.getElementsByTagName("img")[1];
      let path = 'assets/icons/volume-level-' + volumeLevel + '.svg';
      volumeIcon.src = path;

      audio.volume = volumeValue / 100;
  });

  var playButton = document.querySelector('button');
  playButton.addEventListener('click', function(){
    if(typeOfHorn.value == 'party-horn'){
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
    audio.play();
  });
}