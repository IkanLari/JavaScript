let harga;
let nama_brg;
let ket="";
let jumlah=0;
let total=0;
let subtotal=0;

function cek_barang() {
    let nama =document.getElementById("listbarang").value;
    switch(nama) {
        case "Buku":
            harga = 10000;
            nama_brg ="Buku";
            break;
        case "Tas":
            harga = 50000;
            nama_brg ="Tas";
        break;
        case "Pensil":
            harga = 5000;
            nama_brg="Pensil";
            break;
        case "Penghapus":
            harga = 1500
            nama_brg ="Penghapus";
            break;
    }
    jumlah= document.getElementById("jumlah").value;
    subtotal = jumlah * harga;
    total = total + subtotal;
    ket = ket + nama_brg + " : " + harga + " * " + jumlah + " = " +subtotal + "<br>";
    document.getElementById("barang").innerHTML = ket;
    document.getElementById("total").innerHTML = "total Belanja = " + total;
}