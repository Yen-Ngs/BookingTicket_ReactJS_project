import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {LoadingReducer} from '../../redux/reducers/LoadingReducer'

export default function Loading(props) {
    const loading = useSelector(state=state.LoadingReducer)
    renderLoading =() =>{
        if(loading === true){
            return <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, zIndex: 100 }}>
            <div style={{
                width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <span className="display-4 text-white">Loading...</span>
            </div>

        </div>
        }
        return '';

    }
}

    return (
        <div>
            {renderLoading()}
        </div>
    )

