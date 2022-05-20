import './cover.css'

const About = () => {
    return ( 
        <div className="container mt-4">
            <div className="row text-light justify-content-center">
                <div className="col-md-12 text-center"> 
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="row text-light  mt-3">
                <div className="col-md-12">
                    <h2>History</h2>
                    <div className="mt-3 border border-3 border-white p-3">
                        <p> Website ini pertama kali di buat pada tanggal ……. , dari website ini kalian bisa mencari/ menyelesaikan msalah dalam mengerjakan sebuah soal matematika. Di sini kami membuat ini ingin mempermudah dan meng edukasi orang- orang yang belum paham dalam beberapa materi soal matematika. Disini kami menyediakan fitur yang sangat membantu, yang dapat mengerjakan sebuah perhitungan matematika, hanya dengan memasukan beberapa nilai- nilai yang ingin di perhitungkan.</p>
                    </div>
                </div>
            </div>
            <div className="row text-light  mt-3">
                <div className="col-md-12">
                    <h2>Visi</h2>
                    <div className="mt-3 border border-3 border-white p-3">
                        <p> Dengan adanya website ini, kami ingin memberi pelayanan kepada orang – orang diluar sana yang mendapatkan sebuah masalah ketika mengerjakan sebuah soal matematika.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;