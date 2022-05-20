const Data = {
    segitiga: {
        MenghitungLuasSegitiga: 
        function MenghitungLuasSegitiga(){
            const value1 = document.getElementById('nilai1').value
            const value2 = document.getElementById('nilai2').value
            const tampilanHasil = document.getElementById('hasil1')
            
            let hasil = 1/2 * value1 * value2;
            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, 1/2 X ${value1} X ${value2} yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;
                
            // alert('Hasil dari Perhitungan tersebut adalah : ' + hasil);
                            
                            
            // alert('Terimakasih Telah Mencoba^-^')

                
                    
        },
        MenghitungKelilingSegitiga:
        function MenghitungKelilingSegitiga(){

            const value1 = document.getElementById('nilai-keliling-1').value
            const value2 = document.getElementById('nilai-keliling-2').value
            const value3 = document.getElementById('nilai-keliling-3').value
            const tampilanHasil = document.getElementById('hasil2');

      

        
            let hasil = parseInt(value1) + parseInt(value2) + parseInt(value3); 

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, ${value1} + ${value2} + ${value3} yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);
            // // return hasil;
        
            // alert('Terimakasih Telah Mencoba^-^')

        
        }


    },
    kubus : {
        MenghitungVolumeKubus: 
        function MenghitungVolumeKubus() {

            const value1 = document.getElementById('nilai1-volume-kubus').value;
            const value2 = document.getElementById('nilai2-volume-kubus').value;
            const value3 = document.getElementById('nilai3-volume-kubus').value;

            const tampilanHasil = document.getElementById('hasil-volume-kubus');

            let hasil = value1 * value2 * value3;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, ${value1} x ${value2} x ${value3} yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;

            // while(check == true){
            // let s = prompt('Panjang sisi dari kubus : ', '0')
            // let hasil = s * s * s;

            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }

            // alert('Terimakasih Telah Mencoba^-^')
        },
        MenghitungLuasPermukaanKubus: 
        function MenghitungLuasPermukaanKubus() {
            const value1 = document.getElementById('nilai1-luas-permukaan-kubus').value;
            const value2 = document.getElementById('nilai2-luas-permukaan-kubus').value;
            const tampilanHasil = document.getElementById('hasil-luas-permukaan-kubus');


            let hasil = 6* (parseInt(value1) + parseInt(value2));

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, 6 x (${value1} + ${value2})  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;

            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let s = prompt('Panjang sisi dari kubus tersebut :', '0')
            // let hasil = 6 * (parseInt(s) + parseInt(s));
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);


            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }

            // alert('Terimakasih Telah Mencoba^-^')
        },
        MenghitungKelilingKubus: 
        function MenghitungKelilingKubus(){
            const value1 = document.getElementById('nilai1-keliling-kubus').value;
            const tampilanHasil = document.getElementById('hasil-keliling-kubus');

            let hasil = 12 * value1;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, 6 x (${value1} x 12)  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let k = prompt('Panjang sisi dari kubus tersebut :', ' 0')
            // let hasil = 12 * k
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }
            // alert('Terimakasih Telah Mencoba^-^')


        },
        MenghitungLuasSatuSisiKubus:
        function MenghitungLuasSatuSisiKubus(){
            const value1 = document.getElementById('nilai1-luas-satu-sisi-kubus').value;
            const tampilanHasil = document.getElementById('hasil-luas-satu-sisi-kubus')

            let hasil = value1 * value1;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, 6 x (${value1} x ${value1})  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let s = prompt('Panjang dari sisi kubus tersebut :', '0')
            // let hasil = s * s
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }
            // alert('Terimakasih Telah Mencoba^-^')


        }

    },
    tabung : {
        MenghitungVolumeTabung: 
        function MenghitungVolumeTabung(){
            let Rtabung = document.getElementById('nilai1-volume-tabung').value;
            const Ttabung = document.getElementById('nilai2-volume-tabung').value;
            let vtabung = '';
            const tampilanHasil = document.getElementById('hasil-volume-tabung');

            if ( Rtabung === 7 ) {
                vtabung = 22/7;
            } else {
                vtabung = 3.14;
            }

            let hasil = vtabung * Rtabung * Rtabung * Ttabung;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu, 6 x ()  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;



            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while (check == true){
            //     let Rtabung = prompt('Jari-jari sebuah tabung :', '0')
            //     let Ttabung = prompt('Tinggi sebuah tabung :', '0')
            //     let vtabung = '';
            //     if ( Rtabung == 7 ) {
            //         vtabung = 22/7;
            //     } else {
            //         vtabung = 3.14;
            //     }

            //     let hasil = vtabung * Rtabung * Rtabung * Ttabung

            //     alert(`Tabung tersebut memiliki Jari-jari ${Rtabung}cm dan Tinggi ${Ttabung}.\n Lalu kita masukan kedalam rumus yaitu :\n Vt = π x r x r x t \n Vt = ${vtabung} x ${Rtabung} x ${Rtabung} x ${Ttabung}\n yang mendapatkan sebuah hasil : ${hasil} `);

            //     check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');

            

        
        },
        MenghitungLuasPermukaanTabung:
        function MenghitungLuasPermukaanTabung (){
            const diameter = document.getElementById('nilai1-luas-permukaan-tabung').value;
            const Ttabung = document.getElementById('nilai2-luas-permukaan-tabung').value;
            const tampilanHasil = document.getElementById('hasil-luas-permukaan-tabung');


            const jari = diameter / 2;
            let vtabung = ''; 

                if ( jari === 7){
                    vtabung = 22/7;
                } else {
                    vtabung = 3.14;
                }

            let hasil = 2 * vtabung * jari * (parseInt(jari) + parseInt(Ttabung))

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;
            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            //     let diameter = prompt('Diameter Tabung Tersebut :', '0')
            //     let ttabung = prompt('Tinggi Tabung Tersebut :', '0')
            //     let vtabung = '';
            //     let jari = diameter / 2;

            //     if ( jari == 7){
            //         vtabung = 22/7;
            //     } else {
            //         vtabung = 3.14;
            //     }

            //     let hasil = 2 * vtabung * jari * (parseInt(jari) + parseInt(ttabung))

            //     alert(`Tabung tersebut memiliki diameter ${diameter}cm dan jari-jari ${jari}cm,\n Lalu kita masukan kedalam rumus yaitu :\n Lp =  2 x π x r x (r + t) \n Lp = 2 x ${vtabung} x ${jari} x (${jari} + ${ttabung})\n yang mendapatkan sebuah hasil : ${hasil}`)

            //     check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');
            
        },

    },
    segiEmpat : {
        MenghitungLuasSegiEmpat:
        function MenghitungLuasSegiEmpat(){
            const sisi1 = document.getElementById('nilai1-luas-segi-empat').value;
            const sisi2 = document.getElementById('nilai2-luas-segi-empat').value;
            const tampilanHasil = document.getElementById('hasil-luas-segi-empat');

            let hasil = sisi1 * sisi2

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;            


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let sisi1 = prompt('Sisi pertama pada segi empat :', '0')
            // let sisi2 = prompt('Sisi kedua pada segi empat :', '0')

            // let hasil = sisi1 * sisi2 

            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }
            // alert('Terimakasih Telah Mencoba^-^');


        },
        MenghitungKelilingSegiEmpat:
        function MenghitungKelilingSegiEmpat (){
            const sisi = document.getElementById('nilai1-keliling-segi-empat').value;
            const tampilanHasil = document.getElementById('hasil-keliling-segi-empat');

            let hasil = parseInt(sisi) + parseInt(sisi) + parseInt(sisi) + parseInt(sisi);

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;   
            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let sisi = prompt('Sisi pada segi empat :', '0')

            // let hasil = parseInt(sisi) + parseInt(sisi) + parseInt(sisi) + parseInt(sisi)
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');
        }
    },
    persegiPanjang : {
        MenghitungLuasPersegiPanjang :
        function MenghitungLuasPersegiPanjang (){
            const Ppersegipanjang = document.getElementById('nilai1-luas-persegi-panjang');
            const Lpersegipanjang = document.getElementById('nilai2-luas-persegi-panjang');

            const tampilanHasil = document.getElementById('hasil-luas-persegi-panjang');

            let hasil = Ppersegipanjang * Lpersegipanjang;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;   


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let p = prompt('Panjang Persegi panjang tersebut :', '0')
            // let l = prompt('Lebar persegi panjang tersebut :', '0')

            // let hasil = p * l 
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }
            // alert('Terimakasih Telah Mencoba^-^');

        },
        MenghitungKelilingPersegiPanjang :
        function MenghitungKelilingPersegiPanjang (){
            const Ppersegipanjang = document.getElementById('nilai1-keliling-persegi-panjang');
            const Lpersegipanjang = document.getElementById('nilai2-keliling-persegi-panjang');

            const tampilanHasil = document.getElementById('hasil-keliling-persegi-panjang');

            let hasil = 2 * (parseInt(Ppersegipanjang) + parseInt(Lpersegipanjang))

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let p = prompt('Panjang Persegi panjang tersebut :', '0')
            // let l = prompt('Lebar persegi panjang tersebut :', '0')

            // let hasil = 2 * (parseInt(p) + parseInt(l))
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        }
    },
    layangLayang : {
        MenghitungLuasLayang :
        function MenghitungLuasLayang(){
            const d1 = document.getElementById('nilai1-luas-layang');
            const d2 = document.getElementById('nilai2-luas-layang');
            const tampilanHasil = document.getElementById('hasil-luas-layang');

            let hasil = 1/2 * d1 * d2;


            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;   


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let d1 = prompt('Diagonal 1 dari layang-layang tersebut :', '0')
            // let d2 = prompt('Diagonal 2 dari layang-layang tersebut :', '0')

            // let hasil = 1/2 * d1 * d2
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);
            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
                
            // }
            // alert('Terimakasih Telah Mencoba^-^');


        },
        MenghitungKelilingLayang :
        function MenghitungKelilingLayang(){
            const sisiA = document.getElementById('nilai1-keliling-layang');
            const sisiB = document.getElementById('nilai2-keliling-layang');
            const sisiC =  document.getElementById('nilai3-kliling-layang');
            const sisiD = document.getElementById('nilai4-keliling-layang');
            const tampilanHasil = document.getElementById('hasil-keliling-layang');


            let hasil = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC) + parseInt(sisiD);

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let a = prompt('Sisi pertama dari layang-layang tersebut', ' 0')
            // let b = prompt('Sisi kedua dari Layang-layang tersebut', '0')
            // let c = prompt('Sisi Ketiga dari Layang-layang tersebut :', '0')
            // let d = prompt('Sisi Ke empat dari Layang-layang tersebut :', '0')

            // let hasil = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        }
    },
    lingkaran : {
        MengitungJariJariLingkaran :
        function MengitungJariJariLingkaran(){
            const diameter = document.getElementById('nilai1-jari-lingkaran');
            const tampilanHasil = document.getElementById('hasil-jari-lingkaran');

            let hasil = diameter/2;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 

            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let diameter = prompt('Diameter dari Lingkaran Tersebut :', '0')

            // let hasil = diameter/2
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        },
        MenghitungLuasLingkaran : 
        function MenghitungLuasLingkaran(){
            const jari = document.getElementById('nilai1-luas-lingkaran');
            const tampilanHasil = document.getElementById('hasil-luas-lingkaran');
            let v;

            if ( jari === 7) {
                v = 22/7;
            } else {
                v = 3.14;
            }

            let hasil = v * jari * jari;

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 



            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while (check == true){
            // let v;
            // let r = prompt('Jari - jari pada lingkaran tersebut :', '0')

            // if ( r == 7 ){
            //     v = 22/7
            // } else {
            //     v = 3.14
            // }

            // let hasil = v * r * r
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);    

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        },
        MenghitungKelilingLingkaran : 
        function MenghitungKelilingLingkaran(){
            const diameter = document.getElementById('nilai1-keliling-lingkaran');
            const tampilanHasil = document.getElementById('hasil-keliling-lingkaran');
            let v;

            if ( diameter%2 === 0) {
                v = 3.14;
            } else {
                v = 22/7;
            }

            let hasil = v * diameter

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`;

            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let d = prompt('Diameter dari Lingkaran Tersebut :', '0')
            // let v;
            // if ( d%2==0 ){
            //     v = 3.14
            // } else {
            //     v = 22/7
            // }

            // let hasil = v * d
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')
            // }
            // alert('Terimakasih Telah Mencoba^-^');


        }

    }, 
    balok : {
        MenghitungLuasPermukaanBalok :
        function MenghitungLuasPermukaanBalok(){
            const Pbalok = document.getElementById('nilai1-luas-permukaan-balok');
            const Lbalok = document.getElementById('nilai2-luas-permukaan-balok');
            const Tbalok = document.getElementById('nilai3-luas-permukaan-balok');
            const tampilanHasil = document.getElementById('hasil-luas-permukaan-balok');

            let hasil = 2 * (parseInt(Pbalok * Lbalok) + parseInt(Pbalok * Tbalok) + parseInt(Lbalok * Tbalok));

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 

            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let p = prompt('Panjang Balok Tersebut: ','0')
            // let l = prompt('Lebar Balok tersebut :', '0')
            // let t = prompt('Tinggi Balok tersebut :','0')

            // let hasil = 2 * (parseInt(p * l) + parseInt(p * t) + parseInt(l * t))
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');

        },
        MenghitungVolumeBalok : 
        function MenghitungVolumeBalok(){
            const Pbalok = document.getElementById('nilai1-volume-balok');
            const Lbalok = document.getElementById('nilai2-volume-balok');
            const Tbalok = document.getElementById('nilai3-volume-balok');

            const tampilanHasil = document.getElementById('hasil-volume-balok');

            let hasil = Pbalok * Lbalok * Tbalok

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 


            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let p = prompt('Panjang Balok tersebut :','0')
            // let l = prompt('Lebar Balok tersebut :','0')
            // let t = prompt('Tinggi Balok tersebut :','0')

            // let hasil = p * l * t
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        },
        MenghitungKelilingBalok : 
        function MenghitungKelilingBalok(){
            const Pbalok = document.getElementById('nilai1-keliling-balok');
            const Lbalok = document.getElementById('nilai2-keliling-balok');
            const Tbalok = document.getElementById('nilai3-keliling-balok');
            const tampilanHasil = document.getElementById('hasil-keliling-balok');

            let hasil = 4 * (parseInt(Pbalok) + parseInt(Lbalok) + parseInt(Tbalok));

            tampilanHasil.innerHTML = 
            `<div class="row">
                <div class="col-md-12">
                    <div class="p">Cara dari perhitungan tersebut yaitu,  yang menghasilkan ${hasil}. </div>
                </div>
            </div>`; 

            // let check = confirm('Apkah Anda ingin Mencoba Sebuah Perhitungan?')

            // while(check == true){
            // let p = prompt('Panjang Balok tersebut :','0')
            // let l = prompt('Lebar Balok tersebut :','0')
            // let t = prompt('Tinggi Balok tersebut :','0')

            // let hasil = 4 * (parseInt(p) + parseInt(l) + parseInt(t))
            // alert('Hasil dari perhitungan tersebut adalah : ' + hasil);

            // check = confirm('Apakah Anda Ingin Mencobanya Lagi?')

            // }
            // alert('Terimakasih Telah Mencoba^-^');


        }

    }
}



export default Data;
// module.exports.MenghitungLuasSegitiga;