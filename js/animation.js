const sections = document.querySelectorAll(
  ".fade-in-up, .fadeInRight, .fadeInLeft, .fade-in"
);

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Anda bisa sesuaikan threshold sesuai kebutuhan
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active"); // Tambahkan kelas untuk memulai animasi
      observer.unobserve(entry.target); // Hentikan pemantauan setelah animasi dimulai
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
