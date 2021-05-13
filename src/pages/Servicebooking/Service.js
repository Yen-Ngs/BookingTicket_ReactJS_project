import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { bookingCombo } from '../../redux/reducers/CartReducer';

export default function Service(props) {
    const bookingCombo = useSelector(state => state.CartReducer);
    return (
        <div className="m-5">
            <h1 className="text-white">Popcorn and Drinkings</h1>
            <div className="col-8">
                {bookingCombo.photo}
                {bookingCombo.name}
            </div>
            <div className="col-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

