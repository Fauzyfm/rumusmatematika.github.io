import '../../halaman/index.css'
import Data from '../../db_rumus/db_rumus.js'

const Layang = () => {
    
    const CheckModal1 = () => {
        // const btn1 = document.getElementById('btn1');
        const modal = document.getElementById('modal');
        const penutup = document.getElementById('penutup')
        penutup.classList.toggle('penutup')

        modal.classList.toggle('halaman');
        modal.classList.toggle('halaman1');
    }
    
    const CheckModal2 = () => {
        const modal2 = document.getElementById('modal2');
        const penutup = document.getElementById('penutup')
        penutup.classList.toggle('penutup')

        modal2.classList.toggle('halaman');
        modal2.classList.toggle('halaman1');

    }
    
    return ( 
        <div>
            {/* pengertian dari kubus start*/}
            <div class="container text-light mt-5 mb-5">
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <h2>Pengertian Layang-Laynag</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum porro consectetur quas nemo molestias accusantium et aperiam harum iure voluptatibus?
                        </p>
                    </div>
                </div>
            </div>
            {/* pengertian dari kubus end */}

            {/* container 2 start */}
            <div className="container mt-3">

                {/* button untuk modal 1 start*/}
                <div className="row justify-content-center m-4">
                    <div className="col-md-5 text-center">
                        <button className='bg-2 w-100 border-0 p-2' onClick={CheckModal1} >Menghitung Luas Layang - Layang</button>
                    </div>
                </div>
                {/* button untuk modal 1 end */}

                {/* button untuk modal 2 start */}
                <div class="row justify-content-center m-4">
                    <div className="col-md-5 text-center">
                        <button className='bg-2 w-100 border-0 p-2' onClick={CheckModal2} >Menghitung Keliling Layang - Layang</button>
                    </div>
                </div>
                {/* button untuk moodal 2 end */}


                <div className="row  justify-content-center mt-5"  >

                    {/* modal 1 start */}
                    <div class="halaman paling-depan fixed-top mt-5" id='modal' tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Menghitung Luas Layang - Layang</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" id='close' onClick={CheckModal1} aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={Data.layangLayang.MenghitungLuasLayang}>
                            <label class="col-form-label me-2">
                                Diagonal 1 pada Layang tersebut :
                                <input id='nilai1-luas-layang' type="text" class="form-control " placeholder='contoh : 20 cm'/>
                            </label>
                            <label class="col-form-label">
                                Diagonal 2 pada Layang tersebut :
                                <input id='nilai2-luas-layang' type="text" class="form-control" placeholder='contoh : 20 cm'/>
                            </label>
                            <div className='mt-4 pt-4 border-top border-3'>
                                <h5>Hasil jawaban : <span id='hasil-luas-layang'></span></h5>
                            </div>
                        </form>
                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn bck-red" onClick={CheckModal1}  data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={Data.layangLayang.MenghitungLuasLayang} class="btn bck-green">Submit jawaban</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* modal 1 end */}

                    {/* modal 2 start */}
                    <div class=" halaman paling-depan fixed-top mt-5" id='modal2' tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Menghitung Keliling Layang - Layang</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" id='close' onClick={CheckModal2} aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={Data.layangLayang.MenghitungKelilingLayang} >
                            <label class="col-form-label me-1">
                                Sisi pertama pada layang tersebut :
                                <input id='nilai1-keliling-layang' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                            </label>
                            <label class="col-form-label">
                                Sisi kedua pada layang tersebut :
                                <input id='nilai2-keliling-layang' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                            </label>
                            <label class="col-form-label">
                                Sisi ketiga pada layang tersebut :
                                <input id='nilai3-keliling-layang' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                            </label>
                            <label class="col-form-label">
                                Sisi keempat pada layang tersebut :
                                <input id='nilai4-keliling-layang' type="text" class="form-control"  placeholder='contoh : 20 cm'/>
                            </label>


                            <div className='mt-4 pt-4 border-top border-3'>
                                <h5>Hasil jawaban : <span id='hasil-keliling-layang'></span></h5>
                            </div>
                        </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn bck-red" onClick={CheckModal2} data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={Data.layangLayang.MenghitungKelilingLayang} class="btn bck-green">Submit jawaban</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* modal 2 end */}

 
 
                    <div className= 'paling-tengah' id='penutup'>
                    </div>
                </div>            
                

            </div>
            {/* container 2 end */}
    </div>
     );
}
 
export default Layang;