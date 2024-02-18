import React from 'react'
import Map1 from "./Map1.jsx"
import { mapOptions } from './MapConfiguration';
import { useJsApiLoader } from "@react-google-maps/api";

const Services = ({ latitude, longitude}) => {
    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey
    });

    return (
      <div>   
        <section className="page-section portfolio" id="services">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Services </h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    {/* Portfolio Item 1*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
                        </div>
                    </div>
                    {/* Portfolio Item 2*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* Portfolio Item 3*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="..." />
                    </div>
                    </div>
                    {/* Portfolio Item 4*/}
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src="assets/img/portfolio/game.png" alt="..." />
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Food Aid</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    {/*<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />*/}
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div>
                                    {(() => {
                                    if (longitude == null) {
                                        return (
                                        
                                        <h1 style={{color: "red"}}> Please allow the website to access your location in order to view local aid and support locations.</h1>
                                        )
                                   
                                    } else {
                                        return (
                                        <Map1 longitude={longitude} latitude={latitude} placeType={"food shelter"}/>
                                        )
                                    }
                                    })()}
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">A proper source of nutrition is the basis of our wellbeing. Malnutrition is one of the leading causes of disease and low quality of life in Canada. If you are starving and in need of a proper meal, please view the following locations above for support.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 2*/}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Shelter Aid</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    {/*<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />*/}
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div>
                                    {(() => {
                                    if (longitude == null) {
                                        return (
                                        
                                        <h1 style={{color: "red"}}> Please allow the website to access your location in order to view local aid and support locations.</h1>
                                        )
                                   
                                    } else {
                                        return (
                                        <Map1 longitude={longitude} latitude={latitude} placeType={"homeless shelter"}/>
                                        )
                                    }
                                    })()}
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Shelter is one of our most fundamental needs. It ensures safety during the night, and a peacefull place where one can recover, reflect, and heal. If you are in need of shelter, please view the nearest available shelters to you above.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 3*/}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Clothing Aid</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    {/*<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />*/}
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div>
                                    {(() => {
                                    if (longitude == null) {
                                        return (
                                        
                                        <h1 style={{color: "red"}}> Please allow the website to access your location in order to view local aid and support locations.</h1>
                                        )
                                   
                                    } else {
                                        return (
                                        <Map1 longitude={longitude} latitude={latitude} placeType={"clothing free shelter"}/>
                                        )
                                    }
                                    })()}
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Even though clothing isn't the most essential need of us human beings, it is still a contributing factor to our health and is important for our well-being. Through the blistering cold of winters, it is important to have warm clothes to keep us safe from disease and plague. If you are in need of proper clothing, please view the closest clothing drives above.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Modal 4*/}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Mental Health Aid</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image*/}
                                    {/*<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />*/}
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div>
                                    {(() => {
                                    if (longitude == null) {
                                        return (
                                        
                                        <h1 style={{color: "red"}}> Please allow the website to access your location in order to view local aid and support locations.</h1>
                                        )
                                   
                                    } else {
                                        return (
                                        <Map1 longitude={longitude} latitude={latitude} placeType={"mental health clinic"}/>
                                        )
                                    }
                                    })()}
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>    
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">Keeping a healthy state of mind, and taking care of your mental health are very important. More than 700,000 commit suicide every year, leaving their friends and family hopeless and in a constant stack of suffering. Help yourself by viewing the nearest mental health clinics near you above.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Services