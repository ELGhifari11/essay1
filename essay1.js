// essay 1 //
////////////////////////////////////////////////////////////////////////////////////////////////
let Tv = {
    merekTv : "LG",
    typeTv : "Amoled pro 11",
    colorTv : "Black",
    datatv (){
        return "Merek TV " + this.merekTv + " dengan type " + this.typeTv + " varian warana " + this.colorTv
    }

    
};
console.log(Tv.datatv());
////////////////////////////////////////////////////////////////////////////////////////////////////
let Android = {
    merekAndroid : "Samsung",
    typeAndroid : "Galaxy Note",
    colorAndroid : "Blue Spark",
    dataAndroid(){
        return `Merek Android ` + this.merekAndroid + ` dengan type ` + this.typeAndroid + ` Varian Warna ` + this.colorAndroid
    }

};
console.log(Android.dataAndroid());
////////////////////////////////////////////////////////////////////////////////////////////////////////
let yayasanABC = {
    namaSekolah : "Yayasan Peduli Umat",
    kepalaSekolah : "Abdullah",
    jumlahKelas : 12,
    dataYayasan() {
        return this.namaSekolah + ` di kelola oleh Bpk.` + this.kepalaSekolah + ` sekarang mempunyai ` + this.jumlahKelas + ` Kelas yang aktif di gunakan`
    }

};
console.log(yayasanABC.dataYayasan());
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let Biodata = {
    nama : "EL Ghifari",
    panggilan : "EL",
    alamat : "Bekasi",
    dataBiodat(){
        return `Santri ` + this.nama + ` Biasa di panggil ` + this.panggilan + ` Tinggalnya di ` + this.alamat
    }
};
console.log(Biodata.dataBiodat());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let mobil = {
    merek : "BMW",
    Type : "BMW M-8",
    color : "Black",
    dataMobil(){
        return `Mobil ` + this.merek + ` dengan Type ` + this.Type + ` Varian warna ` + this.color
    }
};
console.log(mobil.dataMobil());