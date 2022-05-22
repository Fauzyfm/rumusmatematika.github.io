import { Link } from "react-router-dom";

const Card = ({name, alamat}) => {
  const alamats = alamat

    return ( 
            <div className="col-md-3 mb-4 text-dark align-items-center ">
                    <div className="card bg-1">
                        <div class="card-body jus">
                        <img style={{height: '230px'}} src="gambar/segitiga.jpg" className="card-img-top img-fluid" alt="..." />
                          <h5 className="card-title text-center">{name}</h5>
                          <p className="card-text"></p>
                          <button className="btn bg-2">
                            <Link className="text-decoration-none text-light" rel="stylesheet" to={{pathname: alamats}} >Pelajari Lebih Lanjut</Link>
                          </button>
                          {/* <Link to={{pathname: alamats}}>Pelajari Lebih lanjut</Link> */}
                        </div>
                      </div>
                </div>
        
     );
}
 
export default Card;