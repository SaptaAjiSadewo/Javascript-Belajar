// Kasus Pertama mengubah warna sederhana

const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function() {
  // document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru-muda');
  // document.body.classList.toggle('biru-muda');
}


// Kasus kedua mengubah warna background secara random dengan tombol baru
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appenChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



// Kasus Ketiga Slider/range
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'; 
});

sHijau.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'; 
});

sBiru.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'; 
});



// Kasus Empat dengan cursor
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX);
    // console.log(event.clientY);

    // ukuran browser/ window / lebar dokumen
    // console.log(window.innerWidth);

    // posisi sumbu x
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const YPos = Math.round((event.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', '+ 100 +')';
});





