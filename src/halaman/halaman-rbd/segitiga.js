import '../../halaman/index.css'
import Data from '../../db_rumus/db_rumus.js'
const Segitiga = () => {
    
    // modal untuk Menghitung Luas Segitiga
    const CheckModal1 = () => {
        // const btn1 = document.getElementById('btn1');
        const modal = document.getElementById('modal');
        const penutup = document.getElementById('penutup')
        penutup.classList.toggle('penutup')

        modal.classList.toggle('halaman');
        modal.classList.toggle('halaman1');
    }

    // const closeBtn = () => {
    //     const close = document.getElementById('close');

    //     close.classList.toggle('halaman');
    // }


    // const hasil = Data.segitiga.MenghitungKelilingSegitiga.value
    // modal untuk menghitung keliling segitiga
    const CheckModal2 = () => {
        const modal2 = document.getElementById('modal2');
        const penutup = document.getElementById('penutup')
        penutup.classList.toggle('penutup')

        modal2.classList.toggle('halaman');
        modal2.classList.toggle('halaman1');

    }

    // const check = () => {
    //     console.log(Data.segitiga.MenghitungKelilingSegitiga);
        
    // }


    return ( 
    <div>
        <div class="container text-light mt-5 mb-5 font-DMsans">
            <div class="row justify-content-center">
                <div class="col-md-7 text-center">
                    <h2>Pengertian Segitiga</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum porro consectetur quas nemo molestias accusantium et aperiam harum iure voluptatibus?
                    </p>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row justify-content-center m-4">
                <div className="col-md-5 text-center">
                    <button className='btn-primary w-100 p-2' onClick={CheckModal1} id='btn1'>Menghitung Luas Segitiga</button>
                </div>
            </div>
            <div class="row justify-content-center m-4">
                <div className="col-md-5 text-center">
                    <button className='btn-primary w-100 p-2' onClick={CheckModal2} id='btn1'>Menghitung Keliling Segitiga</button>
                </div>
            </div>
            <div className="row  justify-content-center mt-5"  >
                {/* <div className="col-md-6 text-light bg-dark text-center halaman border border-3 fixed-center border-white mt-5 m-5 p-2 " id='modal'>   
                    <form onSubmit={Data.segitiga.MenghitungLuasSegitiga}>
                        <label class="col-form-label">
                            Alas Segitiga:
                            <input id='nilai1' type="text" class="form-control" placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label ms-3">
                            Tinggi Segitiga:
                            <input id='nilai2' type="text" class="form-control" placeholder='contoh : 20 cm'/>
                        </label>
                        <div>
                        <input type="submit" value="Submit" className="btn-primary mt-2"/>
                        </div>
                    </form>
                </div> */}
                <div className= 'paling-tengah' id='penutup'>

                </div>
                <div class="halaman paling-depan fixed-top mt-5" id='modal' tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Menghitung Luas Segitiga</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" id='close' onClick={CheckModal1} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={Data.segitiga.MenghitungLuasSegitiga}>
                        <label class="col-form-label me-2">
                            Alas Segitiga:
                            <input id='nilai1' type="text" class="form-control " placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label">
                            Tinggi Segitiga:
                            <input id='nilai2' type="text" class="form-control" placeholder='contoh : 20 cm'/>
                        </label>
                        <div className='mt-4 pt-4 border-top border-3'>
                            <h5>Hasil jawaban : <span id='hasil1'></span></h5>
                        </div>
                    </form>
            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn bck-red" onClick={CheckModal1}  data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={Data.segitiga.MenghitungLuasSegitiga} class="btn bck-green">Submit jawaban</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class=" halaman paling-depan fixed-top mt-5" id='modal2' tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Menghitung Keliling Segitiga</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" id='close' onClick={CheckModal2} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={Data.segitiga.MenghitungKelilingSegitiga} >
                        <label class="col-form-label me-1">
                            Sisi Pertama:
                            <input id='nilai-keliling-1' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label">
                            Sisi Kedua:
                            <input id='nilai-keliling-2' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label ">
                            Sisi Ketiga:
                            <input id='nilai-keliling-3' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <div className='mt-4 pt-4 border-top border-3'>
                            <h5>Hasil jawaban : <span id='hasil2'></span></h5>
                        </div>
                    </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn bck-red" onClick={CheckModal2} data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={Data.segitiga.MenghitungKelilingSegitiga} class="btn bck-green">Submit jawaban</button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 text-light bg-dark halaman border fixed-center border-3 border-white m-5 p-2" id='modal2'>   
                    <form onSubmit={Data.segitiga.MenghitungKelilingSegitiga} >
                        <label class="col-form-label">
                            Sisi Pertama:
                            <input id='nilai-keliling-1' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label ms-3">
                            Sisi Kedua:
                            <input id='nilai-keliling-2' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <label class="col-form-label ">
                            Sisi Ketiga:
                            <input id='nilai-keliling-3' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                        </label>
                        <div>
                        <input type="submit" value="Submit" className="btn-primary mt-2"/>
                        </div>
                    </form>
                </div> */}
            </div>            
                
        </div>
    </div>
     );
}
 
export default Segitiga;