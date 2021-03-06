import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getMovieAction } from '../../redux/actions/MovieAction'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "block",
        width:"10px",
        height:"40px",
        fontSize:"40px",
        background:"transparent",
        color:"white"

    }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "block",
        width:"30px",
        height:"60px",
        fontSize:"40px",
        background:"transparent",
        color:"white"}}
        
        onClick={onClick}
      />
    );
  }
  
export function Home(props) {


    const arrFilms = useSelector(state => state.MovieReducer.arrFilms)
    

    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const settings = {
        dots: true,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "100px",
          slidesToShow: 2,
          speed: 500,
          rows: 2,
          slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const renderFilm = () => {
        return arrFilms.map((film, index) => {
            return <div className="text-center" key={index}>
                <div className="home pr-2 pt-3">
                <img className="card-img-top w-100 img" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="detail">
                        <NavLink className="text-white" to={`details/${film.maPhim}`}>READ MORE</NavLink>
                        <span>Release: {film.ngayKhoiChieu.substr(0,10)}</span>
                    </div>
                </div>
                <div className="card-body pr-2">
                    <h4 className="card-title text-center">{film.tenPhim}</h4>

                    <NavLink className="btn text-white"
                        style={{ backgroundImage: 'linear-gradient(to right,rgba(62,33,86,0.6),rgba(62,34,124,0.7),rgba(61,36,126,0.8),rgba(63,40,134,1)' }}
                        to={`details/${film.maPhim}`}>Book Ticket</NavLink>
                </div>
            </div>

        })
    }

    // const renderPagination = () => {
    //     const pages = arrFilms.length / 10;
    //     const buttons = [];
    //     for (let i = 0; i < pages; i++) buttons.push(
    //         <li className="page-item"><a className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</a></li>
    //     )

    //     return (buttons)
    // }

    useEffect(() => {
        dispatch(getMovieAction())
        return () => {

        }
    }, [])


    return (
        <div className="text-white movie">
            <div id="carousel" className="carousel slide" style={{ height: '700px' }} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to={0} className="active" />
                        <li data-target="#carousel" data-slide-to={1} />
                        <li data-target="#carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active item1">
                            {/* <img className="d-block w-100"  style={{ height: '500px' }} src="https://dep.com.vn/wp-content/uploads/2019/04/Game-of-Thrones-13.jpg" alt="First slide" /> */}
                            <div className="details1">
                                <p>Game of Thrones</p><br/>
                                <span>Type: Cerbral, Intimate, Emotion</span><br/>
                                <span>Cast: Anya Taylor???Joy, Harry Melling, Thomas Brodie, Jacob Fortune</span><br/>
                                <span>Rate: 8/10 ??????</span>
                                <button class="text-white button"> <i class="fa fa-play"></i>Play Trailer</button>
                            </div>
                        </div>
                        <div className="carousel-item item2">
                            {/* <img className="d-block w-100" style={{ height: '500px' }} src="https://i.ytimg.com/vi/rmPP-DRqEf0/maxresdefault.jpg" alt="Second slide" /> */}
                            <div className="details1">
                                <p>The Father</p><br/>
                                <span>Type: Family, Emotion</span><br/>
                                <span>Cast: Tran Thanh, Ngoc Giau, Le Giang, Truc Nhan</span><br/>
                                <span>Rate: 8/10 ??????</span>
                                <button class="text-white"> <i class="fa fa-play"></i>Play Trailer</button>
                            </div>
                        </div>
                        <div className="carousel-item item3">
                            {/* <img className="d-block w-100" style={{ height: '500px' }} src="http://static1.squarespace.com/static/5e291ec46e9623666191acb7/t/5fc5953218e72e5fdb975bba/1606784312025/The-Queens-Gambit-Review-Netflix-tv-series.jpg?format=1500w" alt="Third slide" /> */}
                            <div className="details1">
                                <p>The Queen of Gambit</p><br/>
                                <span>Type: Cerbral, Intimate, Emotion</span><br/>
                                <span>Cast: Anya Taylor???Joy, Harry Melling, Thomas Brodie, Jacob Fortune</span><br/>
                                <span>Rate: 9/10 ??????</span>
                                <button class="text-white"> <i class="fa fa-play"></i>Play Trailer</button>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            <div className="container text-center ">
                <h2 className="display-3"> Movie List</h2>
                <Slider {...settings}>
                    {renderFilm()}
                </Slider>
            </div>
            <div className="container promotion">
                <h2 className="display-4 mb-5 text-center"> Promotion</h2>
                <Slider {...settings1}>
                    <div>
                        <img className="d-block w-100" style={{height:'290px'}} src="https://shoppingrechargeoffers.com/wp-content/uploads/2018/12/blockbuster-week-banner3.jpg" alt="First slide" />
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'290px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                    <div>
                        <img className="d-block w-100" style={{height:'290px'}} src="https://www.bhdstar.vn/wp-content/uploads/2018/03/admin-ajax.jpeg" alt="Second slide" />
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'290px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                    <div>
                        <img className="d-block w-100" style={{height:'290px'}} src="https://www.bhdstar.vn/wp-content/uploads/2017/03/BHDStar-Movie365_710x290.jpg" alt="Third slide" />
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'290px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'290px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                </Slider>
            </div>
        </div>
    )
    }
