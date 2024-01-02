// Definisikan fungsi untuk menampilkan ikon volume
function showVolumeIcon() {
    const audioIcon = document.querySelector('.audio-icon-wrapper');
    audioIcon.style.display = 'flex'; // Tampilkan ikon volume
  }

  // Panggil fungsi showVolumeIcon() saat link "Buka Undangan" ditekan
  document.getElementById('tombol-buka').addEventListener('click', function() {
    showVolumeIcon(); // Panggil fungsi untuk menampilkan ikon volume
  });
