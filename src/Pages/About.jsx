import React from 'react'

const About = () => {
    return (
      <div>
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <p className="lead">Welcome to our platform dedicated to fostering connections and support within communities. Our mission is to bridge the gap between individuals in need and essential resources such as food banks, shelters, and free clothing outlets.
                        At our core, we believe that everyone deserves access to basic necessities and support during challenging times. Our platform serves as a vital link, providing a user-friendly interface where individuals can easily locate and access the help they need.
                        </p>
                        <p className="lead">Our commitment to community empowerment drives everything we do. We collaborate closely with local organizations, shelters, and volunteers to ensure that our platform remains a reliable resource for those facing adversity. 
                        By fostering partnerships and leveraging technology, we strive to make a meaningful difference in the lives of individuals and families in need.
                        </p>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <p className="lead">What sets us apart is our dedication to compassion and empathy. We understand the importance of dignity and respect in times of hardship, and we are committed to upholding these values in every interaction. Our team is composed of passionate individuals who are driven by a shared vision of building stronger, more resilient communities.</p>
                        <p className="lead">Whether you are seeking assistance or looking to lend a helping hand, we invite you to join us on our journey of compassion and solidarity. Together, we can make a profound impact and create a brighter future for all. Thank you for being part of our community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
};

export default About