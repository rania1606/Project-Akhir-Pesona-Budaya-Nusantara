function bacaArtikel(namaBudaya, urlArtikel) {
    let yakin = confirm("Apakah Anda yakin ingin membaca artikel tentang " + namaBudaya + "?");
    if (yakin) {
        alert("Selamat membaca! Anda akan dialihkan ke halaman " + namaBudaya + ".");
        window.location.href = urlArtikel;
    } else {
        alert("Aksi dibatalkan.");
    }
}