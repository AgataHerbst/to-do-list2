import Form from '../Form/Form';
import s from './TodoList.module.css'

function TodoList({ todo, setTodo, saveTodo }) {
    return <>
        <div className={s.todo}>
            <fieldset className={s.fieldset}><legend className={s.legend}>ToDo</legend>
                <div>
                    <Form todo={todo} setTodo={setTodo} saveTodo={saveTodo} />
                </div>
            </fieldset>
        </div>
    </>
}

export default TodoList;
