import React from 'react'

const Header = () => {
    return (
      <div>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column" id="header">
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">FIND SUPPORT AND RELIEF ORGANIZATIONS NEAR YOU</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Use our site to help you find food, shelter, clothing, and mental health aid.</p>
            </div>
        </header>
      </div>
    );
};

export default Header