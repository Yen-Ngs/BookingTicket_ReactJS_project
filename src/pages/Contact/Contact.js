import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="container mr-2">
            <div className="text-white mb-5" >
                <NavLink className="nav-link text-white" to="/home"><i class="fas fa-home" style={{width:"50px", height:"20px"}}></i></NavLink>
            </div>
            <div className="row">
                <div className="col-6">
                <div className="text-white ">
                            <h3>CÔNG TY TNHH PANDA VIETNAM</h3>
                            <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</p>
                            <p>Địa Chỉ:&nbsp;Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
                            <p>Hotline: 1900 6017</p>
                            <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
                        </div>
                </div>
                <div className="col-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.23990201904!2d106.7032856!3d10.7298577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11f8c4c9b629e2cf!2zVHJ1bmcgVMOibSBUaMawxqFuZyBN4bqhaSBTQyBWaXZvQ2l0eQ!5e0!3m2!1sen!2s!4v1620135059116!5m2!1sen!2s" width="600" height="450px" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </div>
    )
}
