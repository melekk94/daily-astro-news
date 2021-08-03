import { useEffect } from "react"
import { useSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

const PictureOfTheDay: React.FC = () => {
    const { getPictureOfTheDay } = useActions()
    const { data, error, loading } = useSelector(state => state.pictureOfTheDay)

    useEffect(() => {
        getPictureOfTheDay()
    },[])

    return (
        <div>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && 
                <img src={data} alt="" />}
        </div>
    )
}

export default PictureOfTheDay
