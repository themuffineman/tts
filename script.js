const textarea = document.querySelector('textarea')
const button = document.querySelector('button')

const textToSpeech = ()=>{
    const synth = window.speechSynthesis
    const text = textarea.value

    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
}

button.addEventListener('click', textToSpeech)