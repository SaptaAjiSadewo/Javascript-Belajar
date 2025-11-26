let penumpang = ["Sapta" , undefined, "Rei"];
let tambahPenumpang = function(namaPenumpang, penumpang){
    
    // jika penumpang kosong
    if(penumpang.length == 0){

        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for(let i = 0; i < penumpang.length; i++){

            // jika ada kursi kosong
            if(penumpang[i] == undefined) {

                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;

                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                
                //tampilkan pesan kesalahannya 
                console.log(namaPenumpang + ' Sudah ada');

                // kembalikan isi array dan Keluar dari function
                return penumpang;
            }

            // jika seluruh kursi terisi 
            else if( i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);

                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){

    // jika angkot kosong
    if(penumpang.length == 0){

        // tampilkan pesan jika angkot kosong
        console.log('Angkot masih kosong');

        // kembalikan isi array dan keluar dari function
        return penumpang;

    // jika angkot ada isinya
    } else {

        for(let i = 0; i < penumpang.length; i++){

            // Apakah penumpang sama dengan penumpang yang dikirim
            if (penumpang[i] == namaPenumpang) {

                // Menghapus atau mengisi penumpang itu dengan undefined
                penumpang[i] = undefined;
                
                //tampilkan pesan hapusnya 
                console.log(namaPenumpang + ' Sudah dihapus');

                // kembalikan isi array dan Keluar dari function
                return penumpang;
            }

            // kalo tidak ada penumpangnya
            else if (penumpang[i] == undefined) {
                /* (i == penumpang.length - 1) */

                //tampilkan pesan tidak ada 
                console.log(namaPenumpang + ' Tidak ada di dalam angkot');

                // kembalikan isi array dan Keluar dari function
                return penumpang;
            }            
        }
    }
}

