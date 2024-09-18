// Daftar khodam yang tersedia
const khodamList = [
    "Macan Putih", "Macan Kumbang", "Naga", "Jin Qorin", "Ular", "Buaya Putih", "Tidak Ada",
    "Singa Padlepop", "Lauk Indosiar", "Maung Bandung", "Harimau Biskuat", "Genderuo",
    "Nyi Rorokidul", "Macan Siliwangi", "Tuyul", "Kuntilanak", "Pocong", "Wewe Gombel",
    "Leak Bali", "Raksasa Buto Ijo", "Babi Ngepet", "Si Manis Jembatan Ancol", "Banaspati",
    "Kuyang", "Siluman Harimau", "Jenglot", "Setan Budeg", "Sundel Bolong", "Tuyul Perak",
    "Siluman Ular", "Mambang Kuning", "Babi Hutan", "Arwah Gentayangan", "Kolor Ijo", 
    "Mak Lampir", "Palasik", "Siluman Buaya", "Manusia Kera", "Manusia Harimau", 
    "Manusia Serigala", "Hantu Air", "Hantu Jeruk Purut", "Suster Ngesot", 
    "Terowongan Casablanca", "Hantu Ambulans", "Arwah Penunggu Pohon", "Siluman Rawa", 
    "Hantu Puncak Gunung", "Hantu Kebon", "Siluman Angsa", "Manusia Ikan", "Siluman Kuda", 
    "Arwah Prajurit", "Siluman Kera", "Manusia Burung", "Siluman Gajah", "Hantu Kuburan", 
    "Hantu Bangku Sekolah", "Hantu Bus Kota", "Arwah Korban Kecelakaan", "Hantu Hutan", 
    "Hantu Laut", "Hantu Gunung", "Hantu Sawah", "Hantu Pasar", "Hantu Gedung Tua", 
    "Siluman Harimau Putih", "Siluman Burung Hantu", "Siluman Kalajengking", "Siluman Belalang", 
    "Siluman Ikan Mas", "Siluman Ikan Lele", "Siluman Ikan Paus", "Siluman Ikan Hiu", 
    "Siluman Ikan Pari", "Siluman Katak", "Siluman Kadal", "Siluman Buaya Muara", 
    "Siluman Ular Kobra", "Siluman Ular Sanca", "Siluman Singa", "Siluman Singa Laut", 
    "Siluman Kuda Nil", "Siluman Zebra", "Siluman Kelinci", "Siluman Sapi", 
    "Siluman Kambing", "Siluman Rusa", "Siluman Elang", "Siluman Rajawali", "Siluman Bangau", 
    "Siluman Merak", "Siluman Pelican", "Siluman Flamingo", "Siluman Burung Merpati", 
    "Siluman Gagak", "Siluman Tikus", "Siluman Kucing", "Siluman Anjing", "Siluman Serigala Hitam","Jomok"

];

// Fungsi untuk memilih khodam secara acak
function pilihKhodam(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; // Menghapus hasil sebelumnya

    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = `Khodam  ${khodamTerpilih}.`;

        // Menghapus hasil setelah 5 detik (5000 milidetik)
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    } else {
        resultDiv.textContent = "Nama tidak boleh kosong.";
    }
}

// Menambahkan event listener ke form
document.getElementById("khodamForm").addEventListener("submit", pilihKhodam);
