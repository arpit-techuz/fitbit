import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import carousel1 from '../public/img/carousel-1.jpg'
import carousel2 from '../public/img/carousel-2.jpg'

function Home() {
    return (
        <div>
            <Navigation />
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className="w-100" src={carousel1} alt="First slide" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase">Best Gym Center</h5>
                                    <h1 className="display-2 text-white text-uppercase mb-md-4">Build Your Body Strong With Gymster</h1>
                                    <div>
                                        <Link href="" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</Link>
                                        <Link href="" className="btn btn-light py-md-3 px-md-5">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img className="w-100" src={carousel2} alt="Second slide" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase">Best Gym Center</h5>
                                    <h1 className="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</h1>
                                    <div>
                                        <Link href="" className="btn btn-primary py-md-3 px-md-5 me-3">Join Us</Link>
                                        <Link href="" className="btn btn-light py-md-3 px-md-5">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
