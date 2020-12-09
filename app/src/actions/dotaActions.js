import axios from "axios";

export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAIL = "REQUEST_FAIL";


export const getData = ()=> dispatch => {
    dispatch({type: REQUEST_START});

    axios
        .get("https://api.opendota.com/api/players/80037375")
        .then((res) => {
            console.log(res)
            dispatch({type: REQUEST_SUCCESS, payload: res.data})
        })
        .catch((fuzz) => {
            console.log("caught some fuzz", fuzz)
            dispatch({type: REQUEST_FAIL, payload: fuzz})
        })

}