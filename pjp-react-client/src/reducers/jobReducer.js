import { GET_JOBS } from '../actions/types'; //2
//stup the initial state
const initialState = {
    jobs: [],
    job: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JOBS://the case get projects return the state and load the project with payload from server
            return {
                ...state,
                jobs: action.payload
            };
        default:
            return state;
    }
}