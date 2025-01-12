let currentPage = 2;

const music = document.getElementById('background-music');
music.play();
// Fungsi untuk membuat hati baru

function createHeart() {
  const body = document.body;
  const heart = document.createElement('div');
  heart.className = 'heart fas fa-heart';
  heart.style.left = Math.random() * 90 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  heart.style.animationDuration = Math.random() * 4 + 3 + 's';
  heart.style.fontSize = Math.random() * 25 + 15 + 'px';
  body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

function startApp() {
  const start = document.getElementById('page1');
  start.style.display = 'none';

  document.getElementById('page2').classList.remove('hidden');
  if (currentPage === 2) {
    typeText();
  }
}

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);
  const next = document.getElementById(`page${currentPage + 1}`);

  if (next) {
    current.classList.add('hidden');
    next.classList.remove('hidden');
    currentPage++;
  }
  if (currentPage === 3) {
    setInterval(function () {
      var heartArr = document.querySelectorAll('.fa-heart');
      if (heartArr.length > 100) {
        heartArr[0].remove();
      }
      createHeart();
    }, 200);
    typeTextPage2();
  } else if (currentPage === 4) {
    typeTextPage3();
  }
}

const contents = [
  { id: 'typing-header', text: 'Haii Sayangku!' },
  { id: 'typing-name', text: 'Rahma Maghfirani Restuning Fitria' },
  {
    id: 'typing-paragraph1',
    text: 'sayang aku mau nanya nihh ke kamu, tapi jangan curang yaa.. kamu tau ga sekarang tanggal berapa?? and sebenernya ditanggal sekarang ada apa sihh?',
  },
  {
    id: 'typing-paragraph2',
    text: 'penasaran??? di next aja yaa hehe',
  },
];
let contentIndex = 0;
let charIndex = 0;

function typeText() {
  if (contentIndex < contents.length) {
    const { id, text } = contents[contentIndex];
    const element = document.getElementById(id);

    if (charIndex < text.length) {
      element.textContent += text[charIndex];
      element.classList.add('typing');
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      element.classList.remove('typing');
      charIndex = 0;
      contentIndex++;
      setTimeout(typeText, 500);
    }
  } else {
    // Tampilkan tombol setelah semua teks selesai diketik
    document.getElementById('next-button').classList.remove('hidden');
  }
}

const contentsPage2 = [
  { id: 'typing-header2', text: 'Happy Birthday!' },
  { id: 'typing-name2', text: 'Cintakuuu' },
  {
    id: 'typing-paragraph3',
    text: 'Yaps sekarang adalah hari dimana orang disekitar kamu bahagia, tapiii yg paling bahagia sih aku, kan aku cowo kamu wkwk. iyaa sayang sekarang kamu ulang tahun✨',
  },
  { id: 'typing-paragraph4', text: 'Selamat yaa...' },
];
let contentIndexPage2 = 0;
let charIndexPage2 = 0;

function typeTextPage2() {
  if (contentIndexPage2 < contentsPage2.length) {
    const { id, text } = contentsPage2[contentIndexPage2];
    const element = document.getElementById(id);

    if (charIndexPage2 < text.length) {
      element.textContent += text[charIndexPage2];
      element.classList.add('typing');
      charIndexPage2++;
      setTimeout(typeTextPage2, 100);
    } else {
      element.classList.remove('typing');
      charIndexPage2 = 0;
      contentIndexPage2++;
      setTimeout(typeTextPage2, 500);
    }
  } else document.getElementById('next-button2').classList.remove('hidden');
}

const contentsPage3 = [
  { id: 'typing-header3', text: 'I Just Wanna say' },
  {
    id: 'typing-paragraph5',
    text: 'Semoga kamu selalu bahagia, selalu senyum jangan nangis terus, semoga dilancarkan rezeki kamu, semoga selalu disenengi semua orang lain gaada yg jahat ke kamu, disayang orang tua, dan pasti nya juga disayang akuu heheh. maaf ya kalo aku belum sempurna buat kamu, tapi aku akan terus belajar biar jadi apa yg kamu mau.',
  },
  { id: 'typing-paragraph6', text: 'I Love You Sayang ♡' },
];

let contentIndexPage3 = 0;
let charIndexPage3 = 0;

function typeTextPage3() {
  if (contentIndexPage3 < contentsPage3.length) {
    const { id, text } = contentsPage3[contentIndexPage3];
    const element = document.getElementById(id);

    if (charIndexPage3 < text.length) {
      element.textContent += text[charIndexPage3];
      element.classList.add('typing');
      charIndexPage3++;
      setTimeout(typeTextPage3, 100);
    } else {
      element.classList.remove('typing');
      charIndexPage3 = 0;
      contentIndexPage3++;
      setTimeout(typeTextPage3, 500);
    }
  } else {
    document.getElementById('next-button3').classList.remove('hidden');
  }
}

let autoSliderInterval;

function initAutoSlider() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
      slide.style.display = 'none';
    });

    slides[index].classList.add('active');
    slides[index].style.display = 'block';
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    console.log('Showing slide:', currentSlide + 1);
  }

  if (autoSliderInterval) {
    clearInterval(autoSliderInterval);
  }

  showSlide(0);

  autoSliderInterval = setInterval(showNextSlide, 3000);
}
setTimeout(() => {
  initAutoSlider();
}, 100);

document.addEventListener('DOMContentLoaded', () => {
  const page5 = document.getElementById('page5');
  if (page5 && !page5.classList.contains('hidden')) {
    initAutoSlider();
  }
});
