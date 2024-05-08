// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];
const voiceSelect = document.getElementById('voice-select');
const text = document.getElementById('text-to-speak');
const theImg = document.querySelector('#explore img');
const speakButton = document.getElementById('speak-btn');

function init(){
  populateTheList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateTheList;
  }
  speakButton.addEventListener('click', speak); 
}

function populateTheList(){
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = ''; 
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default){
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

speakButton.addEventListener('click', speak);

function speak() {
  if (window.speechSynthesis.speaking) {
    console.error('Speech synthesis already in progress.');
    return;
  }

  const textValue = text.value.trim();
  if (textValue === '') {
    console.error('No text to speak.');
    return;
  }

  const selectedVoiceName = voiceSelect.value;
  const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
  if (!selectedVoice) {
    console.error('Selected voice not found.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(textValue);
  speech.voice = selectedVoice;

  // Smile animation when speaking starts
  theImg.src = 'assets/images/smiling-open.png';

  speech.onend = function() {
    // Reset to closed smile when speech ends
    theImg.src = 'assets/images/smiling.png';
  };

  window.speechSynthesis.speak(speech);
}
