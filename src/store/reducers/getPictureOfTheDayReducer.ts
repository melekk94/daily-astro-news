import { ActionType } from "../action-types"
import { Action } from '../actions'

interface pictureOfTheDayState {
    loading: boolean,
    error: string | null,
    data: string
}

const initialState = {
    loading: false,
    error: null,
    data: ''
}

const getPictureOfTheDayReducer = (state: pictureOfTheDayState = initialState, action: Action): pictureOfTheDayState => {
    switch(action.type) {
        case ActionType.GET_PICTURE_OF_THE_DAY: {
            return { loading: true, error: null, data: '' }
        }
        case ActionType.GET_PICTURE_OF_THE_DAY_SUCCESS: {
            return { loading: false, error: null, data: action.payload }
        }
        case ActionType.GET_PICTURE_OF_THE_DAY_ERROR: {
            return { loading: false, error: action.payload, data: '' }
        }
        default:
            return state
    }
}

export default getPictureOfTheDayReducer