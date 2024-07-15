import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import carousel1 from '../public/img/carousel-1.jpg'
import carousel2 from '../public/img/carousel-2.jpg'
import ProgramSection from "../components/ProgramSection"
import StatsSection from "../components/StatusData"
import Trainer from "../components/Trainer"
import TestimonialSection from "../components/Testimonial"
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


            <div className="container-fluid p-5">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: 'cover' }} alt="About Gymster" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="text-primary text-uppercase">About Us</h5>
                            <h1 className="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
                        </div>
                        <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
                        <p className="mb-4">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
                        <div className="rounded bg-dark p-5">
                            <ul className="nav nav-pills justify-content-between mb-3">
                                <li className="nav-item w-50">
                                    <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                                </li>
                                <li className="nav-item w-50">
                                    <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-1">
                                    <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                </div>
                                <div className="tab-pane fade" id="pills-2">
                                    <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProgramSection />

            <StatsSection />

            <Trainer />

            <TestimonialSection />

            <Footer />
        </div>
    )
}

export default Home
