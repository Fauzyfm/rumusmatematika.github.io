import Card from '../../component/card.js';
// import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import Modals from '../../component/modal.js';
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../halaman/index.css'

const MainRBD = () => {
 
    // function MenghitungLuasSegitiga(){
    //     confirmAlert({
    //         title: 'Confirm to submit',
    //         message: 'Are you sure to do this.',
    //         buttons: [
    //           {
    //             label: 'Yes',
    //             onClick: () => {
    //                 let alas = prompt('Alas dari Segitiga :', '0')
    //                 let tinggi = prompt('Tinggi dari segitiga :', '0')
    //                 let hasil = 1/2 * alas * tinggi;
            
    //                 alert('Hasil dari Perhitungan tersebut adalah : ' + hasil);
            
                    
    //                 alert('Terimakasih Telah Mencoba^-^')
    //             }
    //           },
    //           {
    //             label: 'No',
                
    //           }
    //         ]
    //       });
    // }
 
    return (  
        <div className='container-lg mt-5 text-light' >
            <div className="row justify-content-center mb-4">
                <div className="col-md-6 text-center">
                    <h2>Rumus Bangun Datar</h2>
                </div>
            </div>
            <div className='row justify-content-start mt-5'>
            <Card name="Segitiga" alamat="/main/rbd-segitiga"/>
            <Card name="Kubus" alamat="/main/rbd-kubus"/>
            <Card name="Tabung" alamat="/main/rbd-tabung" />
            <Card name="Segi Empat" alamat="/main/rbd-segi-empat"/>
            <Card name="Persegi Panjang" alamat="/main/rbd-persegi-panjang"/>
            <Card name="Layang - Layang" alamat="/main/rbd-layang-layang"/>
            <Card name="Lingkaran" alamat="/main/rbd-lingkaran"/>
            <Card name="Balok" alamat="/main/rbd-balok"/>

            </div>
        </div>

        
    );
}
 
export default MainRBD;