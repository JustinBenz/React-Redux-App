import React,{ useEffect } from "react"
import '../style/Stats.css'
import { connect } from 'react-redux'
import { getData } from "../actions/dotaActions"

export const Stats = ({ isFetching, data, error, getData }) => {
    useEffect(()=> {
        getData();
    }, [])

    if (isFetching) {
        return <h2>Getting our data...</h2>
    };

    if (error) {
        return <h2>There was an error, {error}</h2>
    };

    return(
        <div className="parentContain">
            <h1>{data?.profile.personaname}'s Profile</h1>
        </div>
    )
}
const mapStatetoProps = (state)=> {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStatetoProps, {getData})(Stats)