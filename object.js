//membuat object
// object literal
var mhs = {
	nama : "Imma",
	nrp : "54545345",
	email :  'immajs94@gmail.com',
	jurusan : 'SI'
}

//function declaration
function buatObjectmhs(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;

	return mhs;
}
var mhs3 = buatObjectmhs('Imma','54545345','immajs94@gmail.com','SI')

//constructor

function Mahasiswa(nama, nrp, email, jurusan) {
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('Imma','54545345','immajs94@gmail.com','SI')