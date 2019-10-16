var listMakanan=[
  {
    nama: 'nasi goreng',
    harga: 12000
  },
  {
    nama: 'nasi telur',
    harga: 8000
  },
  {
    nama: 'nasi sarden',
    harga: 10000
  },
  {
    nama: 'mie ayam',
    harga: 9000
  }
]

//3. dengan menggunakan Array.forEach dan Array.push buat array baru berisikan 
//makanan yang harganya minimal 10000
//4. dengan menggunakan Array.map buat array baru berisikan nama saja
 array = []
listMakanan.forEach(function(makanan) {
   //console.log(makanan)
  if(makanan.harga >=10000)
    array.push(makanan)
})
var nico=listMakanan.map(makanan=> makanan.nama)

console.log(nico)
