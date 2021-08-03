import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const getPictureOfTheDay = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_PICTURE_OF_THE_DAY
        })

        try {
            const { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=4b6TernrgpJqt6hYznFocwqVFC58dNG13PZFp7Za')
            const url = data.url

            dispatch({
                type: ActionType.GET_PICTURE_OF_THE_DAY_SUCCESS,
                payload: url
            })
        } catch (error) {
            dispatch({
                type: ActionType.GET_PICTURE_OF_THE_DAY_ERROR,
                payload: error.message
            })
        }
    }
}