import TodoList from '../components/TodoList/TodoList';
import List from '../components/List/List';
import  { useState } from 'react';


function App () {
const [todo, setTodo] = useState([
        {
            id: 1,
            title: '',
            status: true
        },
        {
            id: 2,
            title: '',
            status: true
        },
        {
            id: 3,
            title: '',
            status: false
        }
    ])

    return <>
    <div className ="App">
        <TodoList todo={todo} setTodo={setTodo} />
        <List todo={todo} setTodo={setTodo} />
       </div>
  </>
  
}


export default App;