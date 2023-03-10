import TodoList from '../components/TodoList/TodoList';
import List from '../components/List/List';
import  { useState } from 'react';


function App () {
const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'первая задача',
            status: true
        },
        {
            id: 2,
            title: 'вторая задача',
            status: true
        },
        {
            id: 3,
            title: 'третья задача',
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