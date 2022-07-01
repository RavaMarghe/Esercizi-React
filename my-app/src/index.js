import './index.css'
import { decrementCounter, incrementCounter, resetCounter} from './state/CounterReducer'
import store from "./state/Store"
import {addTodo, editTodo, removeTodo} from './state/TodosReducer'
/* container = document.querySelector('#root');
const root = ReactDOM.createRoot(container)
root.render(<Root />)*/


store.subscribe(()=>{       
    console.log(store.getState()) 
 })

 store.dispatch(incrementCounter(7))
 store.dispatch(decrementCounter(5))
 store.dispatch(resetCounter())
 
 store.dispatch(addTodo({id: 1, title: "Beer", completed: true}))
 store.dispatch(addTodo({id:2, title: "Salad", completed: false}))
 store.dispatch(addTodo({id: 3, title: "Potatoes", completed: false}))
 store.dispatch(editTodo(3, {title:"Aubergines", completed: true}))
 store.dispatch(removeTodo(2))
 
 