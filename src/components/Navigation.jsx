import React from 'react'

const Navigation = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#header">THOSE IN NEED</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">      
                        <li className="nav-item dropdown mx-0 mx-lg-1">
                            <a className="nav-link2 py-3 px-0 px-lg-3 rounded dropdown-toggle" data-bs-toggle="dropdown" href="https://www.google.com" role="button" aria-expanded="false">Donate</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item mx-0 mx-lg-1" href="https://feedontario.ca/take-action/donate/" target="_blank" rel="noopener noreferrer">Food</a></li>
                                    <li><a className="dropdown-item mx-0 mx-lg-1" href="https://secure.covenanthouse.ca/page/71239/donate/1?ea.tracking.id=sem-google&utm_content=2023%20MAC%20-%20Text%20-%20Multi%20-%20Monthly%20-%20Expanded&utm_campaign=2023-mac&utm_medium=paid%20social&utm_source=google&gclid=CjwKCAiA8YyuBhBSEiwA5R3-EwKgwpdI-9_16_w0WM7knwlnPjBBV77Wj4ViY4c9KcGTem-OpiDWZhoCo4sQAvD_BwE&gclsrc=aw.ds/" target="_blank" rel="noopener noreferrer">Shelter</a></li>
                                    <li><a className="dropdown-item mx-0 mx-lg-1" href="https://salvationarmy.ca/donations/" target="_blank" rel="noopener noreferrer">Clothes</a></li>
                                    <li><a className="dropdown-item mx-0 mx-lg-1" href="https://givecloud.casamentalhealth.org/donate/" target="_blank" rel="noopener noreferrer">Mental Health</a></li>
                                </ul>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link1 py-3 px-0 px-lg-3 rounded" href="#services">Services</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link1 py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link1 py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navigation