import { ActionType } from "../action-types"

interface GetPictureOfTheDayAction {
    type: ActionType.GET_PICTURE_OF_THE_DAY
}

interface GetPictureOfTheDaySuccessAction {
    type: ActionType.GET_PICTURE_OF_THE_DAY_SUCCESS,
    payload: string
}

interface GetPictureOfTheDayErrorAction {
    type: ActionType.GET_PICTURE_OF_THE_DAY_ERROR,
    payload: string
}

export type Action =
    | GetPictureOfTheDayAction
    | GetPictureOfTheDaySuccessAction
    | GetPictureOfTheDayErrorAction