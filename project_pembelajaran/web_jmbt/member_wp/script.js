// ===== TEXT TYPING =====
const messages = [
  "Kami dari keluarga besar Wide Pigeons mengucapkan",
  "Selamat hari raya Idul Fitri"
];

let msgIndex = 0;
let charIndex = 0;
const textEl = document.getElementById("contentText");

function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    textEl.innerHTML += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      textEl.innerHTML = "";
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      typeEffect();
    }, 1500);
  }
}

// ===== MUSIC =====
const musicBtn = document.getElementById("musicControl");
const audio = document.getElementById("birthdayAudio");
let isPlaying = false;

musicBtn.onclick = () => {
  if (isPlaying) {
    audio.pause();
    musicBtn.innerHTML = "▶";
  } else {
    audio.play();
    musicBtn.innerHTML = "⏸";
  }
  isPlaying = !isPlaying;
};

// ===== HEART EFFECT =====
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.position = "fixed";
  heart.style.animation = "float-heart 4s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

// ===== FLOATING PHOTO =====
const photos = [
  "assets/foto/1.jpeg",
  "assets/foto/2.jpeg",
  "assets/foto/3.jpeg",
  "assets/foto/4.jpeg",
  "assets/foto/5.jpeg",
  "assets/foto/6.jpeg",
  "assets/foto/plenger1.jpeg",
  "assets/foto/plenger2.jpeg",
  "assets/foto/plenger3.jpeg",
  "assets/foto/plenger4.jpeg"
];

function floatPhoto() {
  const photo = document.createElement('img');
  photo.src = photos[Math.floor(Math.random() * photos.length)];
  photo.className = 'floating-photo';
  photo.style.position = 'fixed';
  photo.style.left = Math.random()*100 + 'vw';
  photo.style.top = '100vh';
  photo.style.width = '120px';
  photo.style.borderRadius = '10px';
  photo.style.zIndex = '900';
  photo.style.transition = 'all 5s linear';
  document.body.appendChild(photo);
  setTimeout(() => { photo.style.top = '-20vh'; }, 100);
  setTimeout(() => photo.remove(), 5000);
}

// ===== STARS =====
const starsContainer = document.getElementById('starsContainer');
for(let i=0;i<100;i++){
  const star = document.createElement('div');
  star.style.width = star.style.height = Math.random()*2 + 'px';
  star.style.background = 'white';
  star.style.position = 'absolute';
  star.style.top = Math.random()*100 + 'vh';
  star.style.left = Math.random()*100 + 'vw';
  star.style.borderRadius = '50%';
  star.style.opacity = Math.random();
  starsContainer.appendChild(star);
}

// ===== CLICKABLE GIFT IMAGE =====
const giftImg = document.getElementById("gift-image");
let currentIndex = 0;
giftImg.onclick = () => {
  currentIndex = (currentIndex + 1) % photos.length;
  giftImg.src = photos[currentIndex];
};

// ===== START =====
window.onload = () => {
  typeEffect();
  setInterval(createHeart, 500);
  setInterval(floatPhoto, 700);
};