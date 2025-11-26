var array = [];    	  // deklarasi variabel

arr[0] = "Sapta";	    // Menambah manual array di index ke 0
arr[0] = undefined;	  // Menghapus manual array di index ke 0
console.log(arr)	    // Menampilkan array menggunakan object


var arr = ["Sapta", "Aji", "Sadewo"];

// menampilkan semua isi array

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// Method pada array
// 1. Join - Menggabungkan seluruh isi array dan mengubahnya menjadi string
var arr = ["Sapta", "Aji", "Sadewo"];
console.log(arr.join('-')); // Sapta-Aji-Sadewo

// 2. push - mendorong/memasukkan elemen baru di akhir array
arr.push('Doddy');

// 3. pop - menghilangkan elemen terakhir dari sebuah array
arr.pop();

// 4. Unshift - Menambahkan elemen baru di awal array
arr.unshift('Indimie');

// 5. shift - Menghilangkan elemen pertama array
arr.shift();

// 6. Slice - Mengiris Array - Mengambil beberapa bagian pada array untuk menjadi array yang baru 
// slice(indexAwal, indexAkhir); -> Index awal akan terbawa di array yang baru tapi Index akhir tidak
var arr = ["Ayam", "Babi", "Anjing", "Ular", "Beruang"];
var arr2 = arr.slice(1, 3); // "Babi", "Anjing" -> Mengambil elemen ke-1 dan ke-2 

// 7. Splice - Menyambung/Menambah elemen di tengah-tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2); -> mau dimulai dari index berapa, mau hapus berapa elemen setelah elemen yang ditambah, boleh nambah beberapa array
arr.splice(2, 0, 'Indimie', 'Boleh Nambah'); // Menambahkan elemen setelah "Aji"[1], 0 artinya tidak menghapus, Lalu menambahkan 2 elemen baru setelah "Aji"

// 8. Foreach - Melakukan Looping pada Array
// Untuk setiap elemen yg ada pada array angka lakukan fungsi berikut ini, tanpa index, tanapa perlu menentukan kondisinya, tanpa perlu increment/decrement
// Menjalankan sebuah function untuk tiap tiap elemennya, elemennya = e 
// Tidak mengembalikan array

let angka = [1,2,3,4,5,6,7,8];

// Membutuhkan 1 parameter saja yaitu e untuk elemen/array
// Cara 1
angka.forEach( function(e) {
	console.log(e)	
});

// Cara 2
let cetak = function(e) {
  console.log(e);
}

angka.forEach(cetak);

// Menampilkan array sesuai index
// Membutuhkan 2 parameter saja yaitu e untuk elemen/array dan i untuk index array

let arr = ["Sapta", "Aji", "Rei Ayanami"];

nama.forEach( function(e, i) {
 	console.log('Mahasiswa ke-' + (i + 1) + 'adalah' + e);
});

// 9. Map  
// Lebih baik karena mengembalikan nilai array

let angka = [1,2,3,4,5,6,7,8];
let angka2 = angka.forEach( function(e, i) {
 	return e * 2;
});

console.log(angka2.join(' - ')); // function join tidak berfungsi 

let angka = [1,2,3,4,5,6,7,8];
let angka2 = angka.map( function(e, i) {
 	return e * 2;
});

console.log(angka2.join(' - '));

// 10. Sort
// Mengurutkan nilai dari yang terkecil ke yang terbesar
let angka = [1,4,3,5,7,8,6];
angka.sort();

console.log(angka.join('-')); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8

// Mengurutkan nilai puluhan (jika ada) dari yang terkecil ke yang terbesar
// Karena Pengurutan Abjad (Lexicographical)
// Membandingkan kode karakter (ASCII/Unicode) dari string tersebut satu per satu dari kiri ke kanan
// Compare Function (Fungsi Pembanding)

/*
  a - b adalah Naik (Kecil ke Besar)  -> 1 - 2 - 3 - 4 - 5 - 6 - 8 - 10
  b - a adalah Turun (Besar ke Kecil) -> 10 - 8 - 6 - 5 - 4 - 3 - 2 - 1

  Js hanya melihat digit/char pertamanya saja
  Jika a - b hasilnya Negatif: a ditaruh di depan b (karena a lebih kecil).
  Jika a - b hasilnya Positif: b ditaruh di depan a (karena a lebih besar).
  Jika a - b hasilnya Nol: Posisi tetap.

  Hasil Negatif (-): Artinya a lebih kecil. Biarkan posisinya (jangan ditukar).
  Hasil Positif (+): Artinya a lebih besar. Tukar posisinya (b maju ke depan, a mundur).
  Hasil Nol (0): Artinya nilainya sama. Biarkan saja.

  paling kiri  = a
  kanan        = b

  [10, 5, 3]

  Ronde 1 : a = 10, 5 = b -> index 0
  [10, 5, 3] -> hasil positif {10 - 5 = 5 }, jadi a lempar ke kanan -> Posisi Ditukar [5, 10, 3] ->

  Ronde 2 : a = 10, 3 = b -> index 1
  [5, 10, 3] -> Lalu bandingkan dengan sebelah kanannya -> hasil positif {10 - 3 = 7 } -> jadi a lempar ke kanan -> [5, 3, 10] ->

  Ronde 3 : a = 5, 5 = 3  -> index 2
  [5, 3, 10] -> Algoritma akan mengecek ulang bagian depan yang mungkin belum urut -> hasil positif {5 - 3 = 2 } -> [3, 5, 10] (Array Terakhir) 
  

  a = 10, b = 2
  10 - 2 = 8 (Hasil Positif)
  Karena positif, JavaScript tahu 10 lebih besar, jadi 10 ditukar ke belakang 2
  Hasil: [2, 10] (Benar)

  Lihat pola garis bilangan ini:
  Jika Kecil - Besar (contoh: 2 - 10) -> Hasil pasti Negatif. (Sesuai aturan: Jangan Tukar).
  Jika Besar - Kecil (contoh: 10 - 2) -> Hasil pasti Positif. (Sesuai aturan: Tukar ke Kanan).
  
*/

let angka = [1,2,10,5,3,6,8,4];
angka.sort( function(a,b){
	return a - b;
});

console.log(angka.join(' - ')); // 1 - 2 - 3 - 4 - 5 - 6 - 8 - 10

// Cara Baru menggunakan Typed Array
// Kita buat array khusus angka
let angkaSpesial = new Float64Array([1, 2, 10, 5]);

// Saat di-sort, dia otomatis pakai logika angka!
angkaSpesial.sort(); 

console.log(angkaSpesial.join(' - ')); 

// 11. Filter - Mengembalikan banyak nilai
let angka = [1,2,10,5,20,3,6,8,4];
let angka2 = angka.filter(function (x) {
	return x > 5;
	return x == 5;
});

console.log(angka2); //array
// kalau tidak ada akan mengembalikan array kosong

// 12. Find 
// Mengembalikan satu nilai dan tidak mengembalikan array
let angka = [1,2,10,5,20,3,6,8,4];
let angka2 = angka.find(function (x) {
 	return x > 5;
});

console.log(angka2); 
console.log(angka2.join(' - ')); // tidak bisa 
// hanya menemukan satu nilai dan tidak mengembalikan array








