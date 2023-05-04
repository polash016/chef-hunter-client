import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-secondary text-white page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase">Services</h5>
                <ul className="list-unstyled">
                    <li><a className='text-decoration-none text-white' href="#!">Training</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Branding</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Marketing</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Advertisement</a></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><a className='text-decoration-none text-white' href="#!">About Us</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Contact</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Job</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Training</a></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Legal</h5>
                <ul className="list-unstyled">
                    <li><a className='text-decoration-none text-white' href="#!">Terms of Use</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Privacy Policy</a></li>
                    <li><a className='text-decoration-none text-white' href="#!">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a className='text-decoration-none text-white' href=""> Spice Route</a>
    </div>

</footer>

        </div>
    );
};

export default Footer;