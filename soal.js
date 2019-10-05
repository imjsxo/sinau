var nico = {
  nama: 'Nico',
  semester1: [
    {
      mataKuliah: 'Pengantar IT',
      nilai: 'B'
    },
    {
      mataKuliah: 'Algoritma',
      nilai: 'A'
    },
    {
      mataKuliah: 'Hitungan Dasar',
      nilai: 'C'
    },
    {
      mataKuliah: 'Pemograman I',
      nilai: 'B'
    },
  ]
}

//1. mencari totalIPK
function cariTotalIP() {
  total = 0;
  for(var i = 0; i < nico.semester1.length; i++) {
    if(nico.semester1[i].nilai === 'A') {
      total += 4
    }
    if(nico.semester1[i].nilai === 'B') {
      total += 3
    }
    if(nico.semester1[i].nilai === 'C') {
      total += 2
    }
    if(nico.semester1[i].nilai === 'D') {
      total += 1
    }
    if(nico.semester1[i].nilai === 'E') {
      total += 0
    }
  }
  return total / nico.semester1.length
}
console.log(cariTotalIP())

//2. update object+add property

nico.semester1[2].nilai = 'B'

function cariTotalIP() {
  total = 0;
  for(var i = 0; i < nico.semester1.length; i++) {
    if(nico.semester1[i].nilai === 'A') {
      total += 4
    }
    if(nico.semester1[i].nilai === 'B') {
      total += 3
    }
    if(nico.semester1[i].nilai === 'C') {
      total += 2
    }
    if(nico.semester1[i].nilai === 'D') {
      total += 1
    }
    if(nico.semester1[i].nilai === 'E') {
      total += 0
    }
  }
  return total / nico.semester1.length
}

nico["IPK"] = cariTotalIP()

console.log(nico)



var nico={
  nama: 'Nico',
  pemograman2:{
    absensi: ['H','H','H','H','H','H','H','A','H','A','A','H']
  }
}

/*
1. cari jumlah length dari absensi
2. cari jumlah Hadir
3. cari total presentage dengan 100 dibagi length dari absensi dikali total Hadir
*/
//1. mencari presenatse kehadiran
function TotalAbsensi() {
  var total = 0
  
  for(var i = 0; i <nico.pemograman2.absensi.length; i++){
    if(nico.pemograman2.absensi[i] === 'H') {
      total ++
    }
  }
  return total
}
var hasil;
hasil = 100 / nico.pemograman2.absensi.length * TotalAbsensi();
console.log(hasil)

if(hasil >= 75 ) {
  nico['aman'] = true
}
else{nico['aman'] = false}

console.log(nico)


