import './index.css'
import { incrementCounter} from './state/CounterReducer'
import store from "./state/Store"
/* container = document.querySelector('#root');
const root = ReactDOM.createRoot(container)
root.render(<Root />)*/


store.subscribe(()=>{       
    console.log(store.getState()) 
 })

 store.dispatch(incrementCounter(3))
 store.dispatch(incrementCounter(7))