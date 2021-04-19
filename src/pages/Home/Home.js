import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getMovieAction } from '../../redux/actions/MovieAction'
import "./Home.scss";

export function Home(props) {
    const arrFilms = useSelector(state => state.MovieReducer.arrFilms)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);

    const renderFilm = () => {
        return arrFilms.slice(page * 10 - 10, page * 10).map((film, index) => {
            return <div className="col-4 text-center" key={index}>
                <div className="home">
                    <img className="card-img-top w-100 img" style={{ height: '250px' }} src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="detail">
                        <NavLink className="text-white" to={`details/${film.maPhim}`}>READ MORE</NavLink>
                        <span>Release: {film.ngayKhoiChieu}</span>
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

            <div className="container showMovie">
                <div className="text-center display-4"></div>
                <div className="row mt-10">
                    {renderFilm()}
                </div>
            </div>


            <nav aria-label="Page navigation example ">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => setPage(page - 1)}>Previous</a></li>
                    {renderPagination()}
                    <li className="page-item"><a className="page-link" onClick={() => setPage(page + 1)}>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
