function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // Masukkan namaPenumpang ke array penumpang dengan function push
  this.penumpangNaik = function(namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
   }

  // Menurunkan penumpang
  this.penumpangTurun = function(namaPenumpang, bayar) {
    if(this.penumpang.length === 0) {
      alert('Masih kosong');
      return false
    }

    // Pengecekan namaPenumpang
  for(var i = 0 ; i < this.penumpang.length ; i++ ) {
    if(this.penumpang[i] === namaPenumpang) {
      this.penumpang[i] = undefined;
      this.kas += bayar;
      return this.penumpang;
    }
}
    
}
    
}

// Instansiasi Object/Pembuatan Object
var angkot1 = new Angkot('Sapta', ['Margadadi', 'Paoman'], [], 0);
var angkot2 = new Angkot('Rei', ['Kirancang', 'New York'], [], 0);

// Menambahkan nilai ke dalam properties penumpang lewat function penumpangBaik()
angkot1.penumpangNaik('Sapti');
angkot1.penumpangNaik('Sama');
angkot1.penumpang;

// Mengurangi nilai dari dalam properties penumpang lewat function penumpangTurun()
angkot1.penumpangTurun('Sapti', 2500);
angkot1.kas;




