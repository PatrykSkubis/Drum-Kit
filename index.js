let drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
    drum.addEventListener('click', () => {
       const keyContent = drum.querySelector('.key').textContent;
        playSound(keyContent);
        playAnimation(keyContent);
    })
})

document.addEventListener('keypress', (event)=> {
    playSound(event.key);
    playAnimation(event.key);
})

const sounds = {
  w: "sounds/clap.wav",
  s: "sounds/hihat.wav",
  d: "sounds/kick.wav",
  f: "sounds/openhat.wav",
  g: "sounds/boom.wav",
  h: "sounds/ride.wav",
  j: "sounds/snare.wav",
  k: "sounds/tom.wav",
  l: "sounds/tink.wav",
};

function playSound(key) {
  key = key.toLowerCase();
  const audio = new Audio(sounds[key]);
  audio.play();
}

function playAnimation (currentKey) {
  const animationTime = 100;
  currentKey = currentKey.toLowerCase();
  let activeButton = document.getElementById(currentKey);  
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, animationTime)
}