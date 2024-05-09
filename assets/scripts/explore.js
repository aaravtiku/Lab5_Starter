window.addEventListener('DOMContentLoaded', init);

let voices = [];
const voiceSelect = document.getElementById('voice-select');
var textValue;
const theImg = document.querySelector('#explore img');
const speakButton = document.getElementById('explore').querySelector('button');

function init() {
  populateTheList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateTheList;
  }
  speakButton.addEventListener('click', speak); 
}

function populateTheList() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = ''; 
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speak() {
  theImg.src = 'assets/images/smiling-open.png';

  textValue = document.getElementById('text-to-speak').value;
  
  if (window.speechSynthesis.speaking) {
    console.error('Speech synthesis already in progress.');
    return;
  }

  if (textValue === '') {
    console.error('No text to speak.');
    return;
  }

  console.log(voices);
  var selectedVoiceName = voiceSelect.value;
  const splittedString = selectedVoiceName.split(' ');
  selectedVoiceName = splittedString[0];
  console.log(selectedVoiceName);
  const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
  console.log(selectedVoice);
  if (!selectedVoice) {
    console.error('Selected voice not found.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(textValue);
  speech.voice = selectedVoice;

  speech.onend = function() {
    theImg.src = 'assets/images/smiling.png';
  };

  window.speechSynthesis.speak(speech);
}
