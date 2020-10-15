// mengambil id button
const tUWarna = document.getElementById('tUWarna');
// mengambil body
// const body = document.getElementsByTagName('body')[0];
tUWarna.onclick = function() {
	// document.body.setAttribute('class', 'biru_muda');
	// menambahkan jika classnya tdk ada namun jika ada akan dihilangkan
	document.body.classList.toggle('biru_muda');
}
// membuat button dgn js
const tAcakWarna = document.createElement('button');
// membuat tulisan
const textButton = document.createTextNode('Acak Warna');
// menggabung button & text
tAcakWarna.appendChild(textButton);
// menambahkan atribute pada button
tAcakWarna.setAttribute('type', 'button');
// menyimpan button yg sudah di buat
tUWarna.after(tAcakWarna);

// menambahkan event
tAcakWarna.addEventListener('click', function(){
	// membuat bilangan random
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';
});

// menangkap inputan slider merah
const sMerah = document.querySelector('input[name=sMerah]');
// menangkap inputan slider Hijau
const sHijau = document.querySelector('input[name=sHijau]');
// menangkap inputan slider Biru
const sBiru = document.querySelector('input[name=sBiru]');

// menangkap nilai dari slider
sMerah.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';

});


// menangkap nilai dari slider
sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';

});

sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';

});


document.body.addEventListener('mousemove', function(event){
	// menangkap sumbu X
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	// console.log(xPos);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	const zPos = (xPos / yPos) * 2;
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','+ zPos +')';
});