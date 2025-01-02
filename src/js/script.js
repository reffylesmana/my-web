// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

    // Memuat bahasa yang dipilih dari localStorage atau default bahasa 'en'
    const lang = new URLSearchParams(window.location.search).get('lang') || localStorage.getItem('lang') || 'en';
    localStorage.setItem('lang', lang);

    // Menetapkan teks sesuai dengan bahasa yang dipilih
    const texts = {
        en: {
            title: 'Reffy Portfolio',
            home: 'Home',
            about: 'About Me',
            portfolio: 'Portfolio',
            description: 'Just a regular student',
            bio: 'I am Reffy, currently residing in Paseh, Sumedang. I am a student at SMK Informatika majoring in RPL. I am currently undergoing an internship at a digital marketing company. Previously, I have participated in web development competitions and was active in the school\'s web development extracurricular activities.',
            cv: 'Download CV',
            name: 'Name :',
            birth: 'Place, Date of Birth :',
            Address: 'Address :',
            Address1: 'Paseh, Sumedang, West Java, Indonesia',
            Gender: 'Gender :',
            Gender1: 'Male',
            Nationality: 'Nationality :',
            Nationality1: 'Indonesian',
            Phone: 'Phone :',
            education: 'Educational Background',
            location1: 'North Paseh, Paseh',
            location2: 'Pasar Jambi, Jambi City',
            location3: 'South Paseh, Paseh',
            location4: 'North Sumedang, Sumedang',
            desk: 'A collection of my projects showcasing my skills and creativity in web development and design.',
            text: 'Tourist Reservation',
            text1: 'Participated in the regional Student Skills Competition and secured 2nd place with a theme focusing on tourist destinations in Sumedang. This website was built using HTML, SCSS, Bootstrap, and PHP.',
            text2: 'Final project for the fourth semester, a library website built using HTML, Bootstrap, and PHP.',
            text3: 'Developed a school e-voting platform for the student council president election with the ICSO team.',
            text4: 'Intern Teacher Project',
            text5: "Built a website for a teacher's internship project as part of a company task with a teammate.",
        },
        id: {
            title: 'Portofolio Reffy',
            home: 'Beranda',
            about: 'Tentang Saya',
            portfolio: 'Portofolio',
            description: 'Hanya seorang siswa biasa ceunah',
            bio: 'Saya Reffy, saat ini tinggal di Paseh, Sumedang. Saya seorang siswa di SMK Informatika jurusan RPL. Saat ini saya sedang magang di sebuah perusahaan digital marketing. Sebelumnya, saya telah mengikuti kompetisi pengembangan web dan aktif di kegiatan ekskul pengembangan web di sekolah.',
            cv: 'Unduh CV',
            name: 'Nama :',
            birth: 'Tempat, Tanggal lahir :',
            Address: 'Alamat :',
            Address1: 'Paseh, Sumedang, Jawa Barat, Indonesia',
            Gender: 'Jenis Kelamin :',
            Gender1: 'Laki - laki',
            Nationality: 'Kebangsaan :',
            Nationality1: 'Indonesia',
            Phone: 'No Telepon :',
            education: 'Latar Belakang Pendidikan',
            location1: 'Paseh Kaler, Paseh',
            location2: 'Pasar Jambi, Kota Jambi',
            location3: 'Paseh Kidul, Paseh',
            location4: 'Sumedang Utara, Sumedang',
            desk: 'Kumpulan proyek saya yang menunjukkan keahlian dan kreativitas saya dalam pengembangan dan desain web.',
            text: 'Reservasi Wisata',
            text1: 'Mengikuti Kompetisi Keterampilan Siswa tingkat regional dan meraih Juara 2 dengan tema fokus pada destinasi wisata di Sumedang. Situs web ini dibangun menggunakan HTML, SCSS, Bootstrap, dan PHP.',
            text2: 'Tugas akhir semester empat, website perpustakaan dibangun dengan menggunakan HTML, Bootstrap, dan PHP.',
            text3: 'Mengembangkan platform e-voting sekolah untuk pemilihan ketua OSIS bersama tim ICSO.',
            text4: 'Proyek Guru Magang',
            text5: 'Membangun situs web untuk proyek magang guru sebagai bagian dari tugas perusahaan dengan rekan satu tim.',
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
      // Memproses elemen dengan data-translate secara individual
      document.querySelectorAll('[data-translate]').forEach(el => {
          const key = el.getAttribute('data-translate');
          // Memastikan bahwa teks untuk setiap elemen diubah
          if (texts[lang] && texts[lang][key]) {
              // Jika elemen adalah span, kita hanya mengganti teks di dalamnya
              if (el.tagName === 'SPAN') {
                  el.textContent = texts[lang][key];
              } else {
                  // Jika elemen bukan span, kita mengganti teks langsung
                  el.innerHTML = texts[lang][key];
              }
          }
      });
    });

// Daftar sapaan dalam 20 bahasa berbeda
const greetings = [
  "Hello World, I'm",           // English
  "Halo Dunia, Saya",           // Indonesian
  "ᮠᮜᮧᮃᮔ᮪ ᮃᮘᮀ, ᮕ᮪ᮂᮂ",            // Sunda
  "ꦲꦭꦺꦴꦴꦥꦸꦭꦏ꧀, ꦱꦾꦮꦺꦤ꧀",     // Jawa
  "Bonjour le monde, je suis",  // French
  "Hola Mundo, soy",            // Spanish
  "Hallo Welt, ich bin",        // German
  "Ciao mondo, sono",           // Italian
  "こんにちは世界、私は",          // Japanese
  "안녕하세요 세상, 나는",         // Korean
  "你好，世界，我是",             // Chinese
  "Привет мир, я",             // Russian
  "Hej världen, jag är",       // Swedish
  "مرحباً بالعالم، أنا",         // Arabic
  "สวัสดีโลก, ฉันคือ",             // Thai
  "Merhaba Dünya, ben",        // Turkish
  "Hallo wêreld, ek is",       // Afrikaans
  "Ahoj světe, jsem",          // Czech
  "Witaj świecie, jestem",     // Polish
  "Γειά σου Κόσμε, είμαι",     // Greek
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit."       // Lorem
];

let currentIndex = 0; // Indeks sapaan yang sedang ditampilkan
let charIndex = 0; // Indeks karakter yang sedang ditulis
const typingSpeed = 100; // Kecepatan mengetik dalam milidetik
const pauseTime = 2000; // Waktu jeda antar sapaan
const dynamicTextElement = document.getElementById("dynamic-text");

// Fungsi untuk mengetik sapaan secara bertahap
function typeGreeting() {
  const currentGreeting = greetings[currentIndex]; // Sapaan saat ini

  if (charIndex < currentGreeting.length) {
      dynamicTextElement.textContent += currentGreeting[charIndex]; // Tambahkan karakter berikutnya
      charIndex++; // Lanjutkan ke karakter berikutnya
      setTimeout(typeGreeting, typingSpeed); // Jadwalkan karakter berikutnya
  } else {
      // Tunggu beberapa detik sebelum mengganti sapaan
      setTimeout(() => {
          eraseGreeting(); // Hapus sapaan
      }, pauseTime);
  }
}

// Fungsi untuk menghapus sapaan dengan meninggalkan satu huruf terakhir yang tidak dihapus
function eraseGreeting() {
  const currentGreeting = greetings[currentIndex];

  // Hapus karakter satu per satu, tetapi tetap tinggalkan huruf terakhir
  if (charIndex > 1) {
      dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1); // Hapus karakter terakhir
      charIndex--; // Kurangi indeks karakter
      setTimeout(eraseGreeting, typingSpeed); // Jadwalkan penghapusan karakter berikutnya
  } else {
      // Ganti ke sapaan berikutnya, langsung tampilkan huruf pertama
      currentIndex = (currentIndex + 1) % greetings.length; // Beralih ke sapaan berikutnya secara melingkar
      dynamicTextElement.textContent = greetings[currentIndex][0]; // Tampilkan huruf pertama sapaan baru
      charIndex = 1; // Mulai dari huruf kedua
      setTimeout(typeGreeting, typingSpeed); // Mulai mengetik sapaan baru
  }
}

// Mulai efek mengetik
document.addEventListener("DOMContentLoaded", () => {
  typeGreeting();
});

// GSAP animation for header elements
gsap.from("header", {
  duration: 1.5,
  y: -100,    // Moves the header 100px upwards initially
  opacity: 0,  // Fades the header in from 0 opacity
  ease: "bounce.out"  // Adds a bounce effect
});

// GSAP animation for the navbar menu
gsap.from("#nav-menu", {
  duration: 1,
  opacity: 0,
  y: 50,  // Moves the navbar down initially
  delay: 1,  // Delays the animation of the menu
  ease: "bounce.out"
});