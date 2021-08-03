import { combineReducers } from "redux"
import getPictureOfTheDayReducer from "./getPictureOfTheDayReducer"

const reducers = combineReducers({
    pictureOfTheDay: getPictureOfTheDayReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>