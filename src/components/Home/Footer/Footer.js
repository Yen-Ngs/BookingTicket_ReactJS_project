import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export default function Footer(props) {
    return (
        <div>
            
            <footer className="footer text-white">
                <div className="footer-list container my-40">

                    <div className="row infor mt-5">
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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col text-center col-item1 aboutUs">
                            <p>About Us</p>
                            <br />
                            <NavLink style={{ color: 'white' }} to="/home">Home</NavLink> <br />
                            <NavLink style={{ color: 'white' }} to="/contact">Contact</NavLink><br />
                            <NavLink style={{ color: 'white' }} to="/about">About Us</NavLink><br />
                            <br />
                            <div className="col-icon">
                                <i className="fab fa-facebook-f fb" />
                                <i className="fab fa-twitter tw" />
                                <i className="fa fa-basketball-ball ball" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col col-item1">
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
            <div className="container">
                <div className="row contentinfor">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                            <a href="/home" target="_blank"> Contact</a>
                            </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/home" target="_blank">Help</a></div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/about" target="_blank">About</a></div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/about">Careers</a></div>
                        <div><a href="https://www.fandango.com/donotsellmyinfo">Do Not Sell My Info</a></div>

                </div>
            </div>
            <div className="text-center m-4 text-white p-3" style={{ backgroundColor: 'black' }}>
                <span className="text-center">© 2021 - Panda Cinema - Bookiing Movie Tickets Project</span>
            </div>

        </div>

    )
}
