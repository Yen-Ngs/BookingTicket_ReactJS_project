import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getMovieAction } from '../../redux/actions/MovieAction'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

export function Home(props) {


    const arrFilms = useSelector(state => state.MovieReducer.arrFilms)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const { className, style, onClick } = props;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                <div className="home">
                    <img className="card-img-top w-100 img" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="detail">
                        <NavLink className="text-white" to={`details/${film.maPhim}`}>READ MORE</NavLink>
                        <span>Release: {film.ngayChieu}</span>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title text-center">{film.tenPhim}</h4>

                    <NavLink className="btn text-white"
                        style={{ backgroundImage: 'linear-gradient(to right,rgba(62,33,86,0.6),rgba(62,34,124,0.7),rgba(61,36,126,0.8),rgba(63,40,134,1)' }}
                        to={`details/${film.maPhim}`}>Book Ticket</NavLink>
                </div>
            </div>

        })
    }

    const renderPagination = () => {
        const pages = arrFilms.length / 10;
        const buttons = [];
        for (let i = 0; i < pages; i++) buttons.push(
            <li className="page-item"><a className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</a></li>
        )

        return (buttons)
    }

    useEffect(() => {
        dispatch(getMovieAction())
        return () => {

        }
    }, [])


    return (
        <div className="text-white movie">
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" style={{ height: '900px' }} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://gaumeothuckhuya.files.wordpress.com/2020/11/emily-in-paris-news.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://thatnerdshow.com/site/wp-content/uploads/2021/03/ChaosWalkingbanner.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://media.vov.vn/sites/default/files/styles/front_large/public/2021-02/Untitled_44.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="container text-center ">
                <h2 className="display-3"> Movie List</h2>
                <Slider {...settings}>
                    {renderFilm()}
                </Slider>
            </div>
            {/* <div className="container">
                {renderPagination()}
                
            </div> */}
            <div className="container mt-5">
                <h2 className="display-4 m-5 text-center"> Promotion</h2>
                <Slider {...settings}>
                    <div>
                        <img className="d-block w-100" style={{height:'168px'}} src="https://shoppingrechargeoffers.com/wp-content/uploads/2018/12/blockbuster-week-banner3.jpg" alt="First slide" />
                    </div>
                    <div>
                        <img className="d-block w-100" src="https://www.bhdstar.vn/wp-content/uploads/2018/03/admin-ajax.jpeg" alt="Second slide" />
                    </div>
                    <div>
                        <img className="d-block w-100" src="https://www.bhdstar.vn/wp-content/uploads/2017/03/BHDStar-Movie365_710x320.jpg" alt="Third slide" />
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'168px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                    <div>
                       <img className="d-block w-100" style={{height:'168px'}} src="https://in.bmscdn.com/offers/tncbanner/get-instant-discount-of-upto-inr-125-on-movie-tickets-bms125.jpg?08092018221308" alt=""/>
                    </div>
                </Slider>
            </div>




        </div>




    )
}
