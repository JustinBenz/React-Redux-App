import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL } from '../actions/dotaActions'

const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const dotaReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_START:
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case REQUEST_SUCCESS:
            return({
                ...state,
                data: action.payload,
                isFetching: false,
            })
        case REQUEST_FAIL:
            return({
                ...state,
                error: action.payload,
                isFetching: false,
            })
        default: 
            return state;
    }

}