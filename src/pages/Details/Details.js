import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { getDetails } from '../../redux/actions/MovieAction'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import BookingTicket from '../BookingTicket/BookingTicket'
import './Details.scss'


export default function Details(props) {
    const { movieDetails } = useSelector(state => state.MovieReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(getDetails(id))
    }, [])
    return (
        <div>
            <div className="container text-white details">
                <div className="row mt-5">
                    
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <img src={movieDetails.hinhAnh} className="w-100" alt="123"></img>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                        <table className="table mt-10 text-white text-center">
                            <thead>
                                <tr>
                                    <th>Movie Name</th>
                                    <th>{movieDetails.tenPhim}</th>

                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <th>
                                        <p>
                                            {movieDetails.moTa}
                                        </p>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Starting Day:</th>
                                    <th>{movieDetails.ngayKhoiChieu}</th>

                                </tr>
                                <tr>
                                    <th>Evaluating:</th>
                                    <th>{movieDetails.danhGia}</th>

                                </tr>
                                <tr>
                                    <a className="btn btn-danger m-3" href={`${movieDetails.trailer}`} data-toggle="modal" data-target="#exampleModalCenter">Trailer</a>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-5 container infor_ticket" style={{ backgroundColor: '#1c3c5d' }}>
                <div className="row">
                    <div className="col-4 nav flex-column nav-pills pr-1" id="v-pills-tab"
                        role="tablist" aria-orientation="vertical" >

                        {movieDetails.heThongRapChieu?.map((heThongRap, index) => {
                            let activeClass = index === 0 ? 'active' : '';
                            return <a key={index} className={`nav-link ${activeClass} `} id="v-pills-home-tab"
                                data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab"
                                aria-controls={heThongRap.maHeThongRap} aria-selected="false">
                                <img src={heThongRap.logo} width="50"></img>{heThongRap.tenHeThongRap}
                            </a>
                        })}
                    </div>
                    <div className="col-8 tab-content" id="v-pills-tabContent" >
                        {movieDetails.heThongRapChieu?.map((heThongRap, index) => {
                            const activeClass = index === 0 ? 'active show' : '';
                            return <div
                                key={index}
                                className={`tab-pane fade ${activeClass}`}
                                id={`${heThongRap.maHeThongRap}`} role="tabpanel"
                                aria-labelledby={heThongRap.maHeThongRap}
                            >
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <div key={index}>
                                        <h3>{cumRap.tenCumRap}</h3>
                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, index) => {
                                                return <NavLink className="col-3 text-success" to={`/bookingticket/${lichChieu.maLichChieu}`}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>






                </div>
            </div >
        </div>
    )
}
