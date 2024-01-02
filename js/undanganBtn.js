document.addEventListener("DOMContentLoaded", function () {
  const undanganBtn = document.getElementById("undanganBtn");
  const navbar = document.querySelector(".navbar");

  undanganBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Menghindari perilaku default dari link

    // Tambah atau hapus kelas tertentu pada navbar untuk menampilkan atau menyembunyikan
    navbar.classList.toggle("hidden");
  });
});
