import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

export default function Footer(props) {
    return (
        // <div>

        //     <footer className="footer text-white">
        //         <div className="footer-list container my-40">

        //             <div className="row infor mt-5">
        //                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col col-item1">
        //                     <p>Contact Info</p>
        //                     <br />
        //                     <div className="col-4-item1">
        //                         <i className="fa fa-map-marker-alt" />
        //                         <span>1234k Avenue, 4th block, New York City.</span>
        //                     </div>
        //                     <div className="col-4-item1">
        //                         <i className="fa fa-envelope" />
        //                         <span>info@example.com</span>
        //                     </div>
        //                     <div className="col-4-item1">
        //                         <i className="fa fa-phone" />
        //                         <span>+1234 567 567</span>
        //                     </div>
        //                 </div>
        //                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col text-center col-item1 aboutUs">
        //                     <p>About Us</p>
        //                     <br />
        //                     <NavLink style={{ color: 'white' }} to="/home">Home</NavLink> <br />
        //                     <NavLink style={{ color: 'white' }} to="/contact">Contact</NavLink><br />
        //                     <NavLink style={{ color: 'white' }} to="/about">About Us</NavLink><br />
        //                     <br />
        //                     <div className="col-icon">
        //                         <i className="fab fa-facebook-f fb" />
        //                         <i className="fab fa-twitter tw" />
        //                         <i className="fa fa-basketball-ball ball" />
        //                     </div>
        //                 </div>
        //                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col col-item1">
        //                     <p>Latest News</p>
        //                     <br />
        //                     <div className="col-4-item">
        //                         <div>
        //                             <i className="fa fa-arrow-right" />
        //                             <span> Donec purus neque, vulputate id est id</span>
        //                         </div>
        //                         <div>
        //                             <i className="fa fa-arrow-right" />
        //                             <span> Donec purus neque, vulputate id est id</span>
        //                         </div>
        //                         <div>
        //                             <i className="fa fa-arrow-right" />
        //                             <span> Donec purus neque, vulputate id est id</span>
        //                         </div>
        //                         <div>
        //                             <i className="fa fa-arrow-right" />
        //                             <span> Donec purus neque, vulputate id est id</span>
        //                         </div>
        //                         <div>
        //                             <i className="fa fa-arrow-right" />
        //                             <span> Donec purus neque, vulputate id est id</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </footer>
        //     <div className="container">
        //         <div className="row contentinfor">
        //                 <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
        //                     <a href="/home" target="_blank"> Contact</a>
        //                     </div>
        //                 <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/home" target="_blank">Help</a></div>
        //                 <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/about" target="_blank">About</a></div>
        //                 <div className="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-2"><a href="/about">Careers</a></div>
        //                 <div><a href="https://www.fandango.com/donotsellmyinfo">Do Not Sell My Info</a></div>

        //         </div>
        //     </div>
        //     <div className="text-center m-4 text-white p-3" style={{ backgroundColor: 'black' }}>
        //         <span className="text-center">?? 2021 - Panda Cinema - Bookiing Movie Tickets Project</span>
        //     </div>

        // </div>
        <div className="footer">
            <div className="footer-container container">
            <div className="footer-item">
                <div className="footer-policy">
                    <div className="row">
                        <div className="content-policy row">
                            <div className="panda-vietnam col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col">
                                <h3>CGV Vi???t Nam</h3>
                                <ul>
                                    <ol><a href="https://www.cgv.vn/default/about-cgv/">Gi???i Thi???u</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/cgv-online/">Ti???n ??ch Online</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/gift-card/">Th??? Qu?? T???ng</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/careers/">Tuy???n D???ng</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/contacts/">Li??n H??? Qu???ng C??o CGV</a></ol>
                                </ul>
                            </div>
                            <div className="panda-policy col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col">
                                <h3>??i???u kho???n s??? d???ng</h3>
                                <ul>
                                    <ol><a href="https://www.cgv.vn/default/terms-conditions/">??i???u Kho???n Chung</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/terms-use/">??i???u Kho???n Giao D???ch</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/payment-policy/">Ch??nh S??ch Thanh To??n</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/privacy-policy/">Ch??nh S??ch B???o M???t</a></ol>
                                    <ol><a href="https://www.cgv.vn/default/faq/">C??u H???i Th?????ng G???p</a></ol>
                                </ul>
                            </div>
                            <div className="panda-follow-us col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col">
                                <h3>K???t n???i v???i ch??ng t??i</h3>
                                <ul className="d-flex">
                                    <ol><a className="follow-fb" href="https://www.facebook.com/cgvcinemavietnam" target="_blank">
                                        <img className="w-25" src="https://www.facebook.com/images/fb_icon_325x325.png"></img></a></ol>
                                    <ol><a className="follow-zalo" href="http://zalo.me/1884424922722396289" target="_blank">
                                        <img className="w-50" src="https://lh3.googleusercontent.com/Zs0-SVFd7FHABCT6buDhAVmOZHlIJS8Z37LMmWghcJV9N4ryZfpI0dZa0jzejcJ3cQ=s180"></img></a></ol>
                                </ul>
                                <ul className="d-flex ">
                                <ol><a className="follow-yt" href="https://www.youtube.com/cgvvietnam" target="_blank">
                                        <img className="w-25" src="https://www.hebergementwebs.com/image/3e/3e12f3c0b86d14c050bc0134eba6fcd1.jpg/youtube-has-a-new-idea-to-encourage-you-to-use-its-paid-version.jpg"></img></a></ol>
                                    <ol><a className="follow-instagram" href="http://instagram.com/cgvcinemasvietnam" target="_blank">
                                        <img className="w-50" src="https://www.orissapost.com/wp-content/uploads/2021/02/unnamed-1.png"></img></a></ol>
                                </ul>
                            </div>
                            <div className="customer-panda col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col">
                                <h3>Ch??m s??c kh??ch h??ng</h3>
                                <p>Hotline: 1900 6017<br />
                            Gi??? l??m vi???c: 8:00 - 22:00 (T???t c??? c??c ng??y bao g???m c??? L??? T???t)
                            <br />Email h??? tr???: <a href="mailto:hoidap@cgv.vn">hoidap@cgv.vn</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-address mt-5">
                    <div className="cgv-address-content">
                        <div className="">&nbsp;</div>
                        <div className="">
                            <h3>C??NG TY TNHH PANDA VIETNAM</h3>
                            <p>Gi???y CN??KDN: 0303675393, ????ng k?? l???n ?????u ng??y 31/7/2008, ????ng k?? thay ?????i l???n th??? 5 ng??y 14/10/2015, c???p b???i S??? KH??T th??nh ph??? H??? Ch?? Minh.</p>
                            <p>?????a Ch???:&nbsp;T???ng 2, Rivera Park Saigon - S??? 7/28 Th??nh Th??i, P.14, Q.10, TPHCM.</p>
                            <p>Hotline: 1900 6017</p>
                            <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="text-center mt-4 text-white p-3" style={{ backgroundColor: 'black' }}>
                <span className="text-center">?? 2021 - Panda Cinema - Booking Movie Tickets Project</span>
            </div>

        </div>

        </div>

    )
}
