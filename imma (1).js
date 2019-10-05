var nilai = ['A', 'C', 'D', 'A', 'E', 'B', 'B']

/*
A=100
B=80
C=60
D=40
E=20
*/

function cariTotalNilai(array) {
    var total = 0
    for (var i = 0; i < array.length; i++) {  
        if (array[i] === 'A') {
            total += 100
        }
        if (array[i] === 'B') {
            total += 80
        }
        if (array[i] === 'C') {
            total += 60
        }
        if (array[i] === 'D') {
            total += 40
        }
        if (array[i] === 'E') {
            total += 20
        }
    }
    return total
}

function cariJumlahNilai(array, nilai) {
    var total = 0
    for (var i = 0; i < array.length; i++) { //buat mendekte nilai
        if (array[i] === nilai) { //mengecek nilai
            total++
        }
    }
    return total
}

console.log(cariJumlahNilai(nilai, 'B'))


var murid = [
    {
        nama: 'nicolas',
        nilai: 'A'
    },
    {
        nama: 'juniar',
        nilai: 'B'
    },
    {
        nama: 'kurniawan',
        nilai: 'A'
    },
    {
        nama: 'imma',
        nilai: 'A'
    },
    {
        nama: 'puji',
        nilai: 'D'
    },
    {
        nama: 'andriani',
        nilai: 'D'
    },
    {
        nama: 'sayang',
        nilai: 'A'
    },
]

function cariMuridDenganNilai(murid) {
    //aku butuh kertas kosong(buat nampung orang yg punya nilai A)
    //dekte murid2, aku cek siapa aja yg bernilai A
    //kalo ketemu, aku tulis nama org itu ke kertas
    //setelah selesai kertas aku berikan
    var array = []
    for (var i = 0; i < murid.length; i++) {
        if (murid[i].nilai === 'A') {
            array.push(murid[i].nama)
        }
    }
    return array
}

var array = [1, 3, 2, 6, 4, 5]

function nilaiTerbesar() {
    nilai = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > nilai) {
            nilai = array[i]
        }
    }
    return nilai
}

function nilaiTerkecil() {
    nilai = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] < nilai) {
            nilai = array[i]
        }
    }
    return nilai
}

console.log(nilaiTerkecil())

var nomor = [1,2,3,4,5,6,7,8,9,10]
var totalgenap = 1;
var totalganjil = 1; 



for (var i = 0; i < 10; i++){
if(nomor[i] % 2 === 0){
  totalgenap *= nomor[i]};
}

for (var i = 0; i < 10; i+=1){
if(nomor[i] % 2 !== 0){
  totalganjil *= nomor[i]};
}


console.log(totalgenap - totalganjil);

var arrayAngka=[3,5,2,9,7,6,1,4]
var totalgenap = 0;
var totalganjil= 0;

for (var i = 0; i < arrayAngka.length; i++){
  if(arrayAngka[i] % 2 === 0) {
    totalgenap += arrayAngka[i];
  }
}
console.log(totalgenap);


for (var i = 0; i < arrayAngka.length; i+=1){
  if(arrayAngka[i] % 2 !== 0) {
    totalganjil += arrayAngka[i];
  }
}
console.log(totalganjil);


var arrayAngka=[3,5,2,9,7,6,1,4]

function nilaiterbesar() {
  nilai = 0 
  for(var i = 0; i < arrayAngka.length; i++) {
    if(arrayAngka[i]>nilai) {
      nilai = arrayAngka[i]
    }
  }
  return nilai
}

if(nilaiterbesar() % 2 === 0) {
  console.log('Nilai terbesar adalah genap')
}
else{
  console.log('Nilai terbesar adalah ganjil')
}

var arrayMurid=[
  {
    nama: 'Nicolas',
    jeniskelamin:'laki-laki',
    nilai:60
  },
  {
    nama: 'Imma',
    jeniskelamin:'perempuan',
    nilai:73
  },
  {
    nama: 'Juniar',
    jeniskelamin:'laki-laki',
    nilai:81
  },
  {
    nama: 'Kurniawan',
    jeniskelamin:'laki-laki',
    nilai:53
  },
  {
    nama: 'Puji',
    jeniskelamin:'perempuan',
    nilai:58
  },
  {
    nama: 'Andriani',
    jeniskelamin:'perempuan',
    nilai:65
  },
]

function Totalnilai() {
  nilaiperempuan = 0;
  nilailakilaki  = 0;
  for(var i = 0; i < arrayMurid.length; i++) {
    if(arrayMurid[i].jeniskelamin === 'perempuan') {
      nilaiperempuan += arrayMurid[i].nilai
    }
    else{
       nilailakilaki += arrayMurid[i].nilai
    }
  }
 // console.log("nilai wedok "+nilaiperempuan+ " nilai bujang "+nilailakilaki)
}

Totalnilai()

function cariMuridDengannilai() {
  var array = []
  for(var i = 0; i < arrayMurid.length; i++) {
    if(arrayMurid[i].nilai < 60) {
      array.push(arrayMurid[i].nama)
    }
  }
  return array
}

//console.log(cariMuridDengannilai())

function selisihNilai() {
   wedok = 0 ;
    bujang= 100;
  var totalselisih;
  for(var i = 0; i < arrayMurid.length; i++) {
    if(arrayMurid[i].jeniskelamin === 'perempuan' && arrayMurid[i].nilai > wedok) {
      wedok = arrayMurid[i].nilai
    }
    if(arrayMurid[i].jeniskelamin === 'laki-laki' && arrayMurid[i].nilai < bujang) {
      bujang = arrayMurid[i].nilai
    }
  }
  
  return wedok - bujang
}
console.log(selisihNilai())

var arrayAngka= [3,6,4,2,8]

function Hasilakhir() {
  var nilai = [];
  for(var i = 0; i < arrayAngka.length; i++) {
    nilai.push(10 - arrayAngka[i])
  }
  return nilai
}

console.log(Hasilakhir())

var murid1={
  nama: 'imma',
  nilai: [70,80,40,80]
}
var murid2={
  nama: 'nico',
  nilai: [60,50,90,75]
}

  var nilaiimma = 0;
  var nilainico = 0;
  
  for(var i = 0; i < murid1.nilai.length; i++) {
    nilaiimma += murid1.nilai[i]
  }
  
  for(var i = 0; i < murid2.nilai.length; i++) {
    nilainico += murid2.nilai[i]
  }

if(nilaiimma>nilainico) {
  console.log('Lebih besar nilai Imma')
}
else{
  console.log('Lebih besar nilai Nico')
}










































