import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export default function Footer(props) {
    return (
        <div>
    <footer className="footer text-white">
        <div className="footer-list container my-40">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col col-item1">
                    <p>Contact Info</p>
                    <br />
                    <div className="col-4-item1">
                        <i className="fa fa-map-marker-alt" />
                        <span>1234k Avenue, 4th block, New York City.</span>
                    </div>
                    <div className="col-4-item1">
                        <i className="fa fa-envelope" />
                        <span>info@example.com</span>
                    </div>
                    <div className="col-4-item1">
                        <i className="fa fa-phone" />
                        <span>+1234 567 567</span>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col text-center">
                    <p>About Us</p>
                    <br />
                    <NavLink style={{color:'white'}} to="/home">Home</NavLink> <br />
                    <NavLink style={{color:'white'}} to="/contact">Contact</NavLink><br />
                    <NavLink style={{color:'white'}} to="/about">About Us</NavLink><br />
                    <br />
                    <div className="col-icon"> 
                        <i className="fab fa-facebook-f fb" />
                        <i className="fab fa-twitter tw" />
                        <i className="fa fa-basketball-ball ball" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col aboutUs">
                    <p>Latest News</p>
                    <br />
                    <div className="col-4-item">
                        <div>
                            <i className="fa fa-arrow-right" />
                            <span> Donec purus neque, vulputate id est id</span>
                        </div>
                        <div>
                            <i className="fa fa-arrow-right" />
                            <span> Donec purus neque, vulputate id est id</span>
                        </div>
                        <div>
                            <i className="fa fa-arrow-right" />
                            <span> Donec purus neque, vulputate id est id</span>
                        </div>
                        <div>
                            <i className="fa fa-arrow-right" />
                            <span> Donec purus neque, vulputate id est id</span>
                        </div>
                        <div>
                            <i className="fa fa-arrow-right" />
                            <span> Donec purus neque, vulputate id est id</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

    )
}
