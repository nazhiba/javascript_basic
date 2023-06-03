console.log('Hello World!');

//menulis komentar 1 baris

/*
menulis
komentar
*/

document.writeln("<h1>hello world</h1>");

//angka
document.writeln(100);
document.writeln("<br>");
document.writeln(100.14);

//kode biner
document.writeln("<br>")
document.writeln( 0b10111001 )

//boolean
document.writeln('<br>')
document.writeln(true)
document.writeln(false)

//String
document.writeln('<br>')
document.writeln('hello world')

//string+string
document.writeln('<br>')
document.writeln('Nama :'+' Nazhiif')


//enter(\n),tab(\t),(\'),(\"),slash(\\)
document.writeln('<br>')
document.write('awal \\ akhir')


//variabel
var x
var y


//mengubah data variabel
x = "Jokowi"
y = "JK"


//variabel dan data
var br = "</br>"
var z = "Nazhiif"
document.writeln(br+z)


//let dan const(variabel pengganti var)
let jancok = "ninanina"
const jancok2 = "Hello world"
document.writeln(br+jancok)
document.writeln(br+jancok2)



//Matematika(+,-,*,**,/,%)
let a = 10
let b = 20
let tambah = a+b
document.writeln(br+tambah)
tambah = tambah-1
document.writeln(br+tambah)
tambah = tambah*2
document.writeln(br+tambah)



//cara laen
tambah+=10
document.writeln(br+tambah)


//perbandingan(<,>,<=,>=,==,===,!=,!==)
let result = 5 == "5"
document.writeln(br+result)
result = 5 > 10
document.writeln(br+result)



//logika(&&,!,||)
let nilai = 80
let alpa = 3
//penyaringan
let minNilai = nilai > 75;
let minAlpa = alpa > 3;
//hasil
const hasilakhir = minNilai && minAlpa;
document.writeln("Hasil Akhir : "+hasilakhir)
//cara lain yang katannya lebih mudah(menggunakan string Template)
document.writeln(`${br}Hasil Akhir : ${hasilakhir}`)



//CONSOLE
console.info('Hello world')
console.warn('Warning')
console.error('Eror')
console.debug('Debug')


//string template variabel
const hello = 10
const saring_hello = `${hello > 1}`
console.info(saring_hello)


//konfersi String ke Number
const string = Number("1")
const integer = 1
let akhir = string + integer
console.info(akhir)
//parseInt
//parseFloat



//number ke String
akhir = string.toString() + integer.toString()
console.info(akhir)
  
  
  
//Tipe data Array
let array = []
let arrayNama = [`nazi`,`hitler`,`jokowi`]
document.write(arrayNama)
//Menambahkan data Ke Array
array.push('Riyantoo','budi','tuti')
//menambahkan array di dalam array
array.push(['Riya','hedon','ppp'])
//delete array
delete array[1]
//nambah array
array[1] = 'Jokowi'
console.table(array)



//objek
let guguk = {}
guguk['nama'] = 'Nazhiif Hibatulloh'
guguk['alamat'] = 'Pinggir Jalan,pulau Jawa'
guguk['umur'] = 13
console.table(guguk)


//hapus objek
delete guguk['umur']
console.table(guguk)



//membuat objek dengan cara lain
let me = {
  nama : 'Nikola Tesla',
  "umur dia" : 'wes Mati',
  alamat : 'Makam'
}
console.info(`Nama : ${me.nama}`)
console.info(`Alamat : ${me["umur dia"]}`)



//Percabangan (If)
let username = "rooted"
if (username =="root"){
  document.write(`:V`)
}else if(username == "rooted"){
  document.writeln(`${br}hp sudah di root`)
}else{
  document.write(`:(`)
}



//udah 3jam Mending ngoding( lanjut popup)
alert("Izinkan sharing cookies")
let nama = prompt("Masukkan nama")
alert(`Hello ${nama}`)
let cc = confirm('apakah kamu mau share semua cookies')

console.info(cc)

