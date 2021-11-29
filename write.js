const programming = document.querySelector('.programming-text');
const working = document.querySelector('.work-text');


let txt1 = 'Ich 💜 es Probleme zu lösen';
let txt2 = "Lass uns zusammen arbeiten 🤝!";
let i = 0;
let j = 0;
let speed = 100;

function typeWriter() {
  if (i < txt1.length) {
    programming.innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    typeWork()
  }
}
function typeWork() {
  if (j < txt2.length) {
    working.innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWork, speed);
  }
}

typeWriter()


