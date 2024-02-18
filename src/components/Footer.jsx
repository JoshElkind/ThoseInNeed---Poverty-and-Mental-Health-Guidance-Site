import React from 'react'

const Footer = () => {
    return (
      <div>
          <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* Footer Location*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">OUR FUTURE</h4>
                        <p className="lead mb-0">
                            More is to come...
                            <br />
                           
                        </p>
                    </div>
                    {/* Footer Social Icons*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    {/* Footer About Text*/}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">OUR STORY</h4>
                        <p className="lead mb-0">
                            Helping as many as possible. Doing what we can. In partnership with you.
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        {/* Copyright Section*/}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Those In Need 2023</small></div>
        </div>
      </div>
    );
};

export default Footer