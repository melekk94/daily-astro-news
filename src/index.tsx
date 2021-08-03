import { Provider } from "react-redux"
import { store } from './store'
import ReactDOM from "react-dom"
import PictureOfTheDay from './components/PictureOfTheDay'

const App = () => {
    return <Provider store={store}>
        <div>
            <PictureOfTheDay />
        </div>
    </Provider>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)