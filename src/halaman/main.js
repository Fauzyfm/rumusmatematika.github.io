import { Link } from "react-router-dom";
import './cover.css';

const Main = () => {
    return ( 
        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-12">
                    <div className="list-group shadow-lg">
                    <Link to="/main/rbd" class="list-group-item list-group-item-action msover mb-2 rounded ">
                        <div class="d-flex w-100 justify-content-between ">
                        <h5 class="mb-1">Rumus Matematika Bangun Datar</h5>
                        <small class="text-muted">...</small>
                        </div>
                        <p class="mb-1">Kalian bisa menghitung rumus pada sebuah Bangun Datar.</p>
                        <small class="text-muted">contoh: persegi panjang, segitiga, lingkaran.</small>
                    </Link>
                    <Link to="#" class="list-group-item list-group-item-action msover border border-3 border-white mb-2 rounded">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Coming Soon</h5>
                        <small class="text-muted">...</small>
                        </div>
                        <p class="mb-1">coming soon.</p>
                        <small class="text-muted">coming soon.</small>
                    </Link>
                    <Link to="#" class="list-group-item list-group-item-action msover border border-3 border-white mb-2 rounded">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Coming Soon</h5>
                        <small class="text-muted">...</small>
                        </div>
                        <p class="mb-1">coming soon.</p>
                        <small class="text-muted">coming soon.</small>
                    </Link>
                    <Link to="#" class="list-group-item list-group-item-action msover border border-3 border-white mb-2 rounded">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Coming Soon</h5>
                        <small class="text-muted">...</small>
                        </div>
                        <p class="mb-1">coming soon.</p>
                        <small class="text-muted">coming soon.</small>
                    </Link>
                    <Link to="#" class="list-group-item list-group-item-action msover border border-3 border-white rounded">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Coming Soon</h5>
                        <small class="text-muted">...</small>
                        </div>
                        <p class="mb-1">coming soon.</p>
                        <small class="text-muted">coming soon.</small>
                    </Link>


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;