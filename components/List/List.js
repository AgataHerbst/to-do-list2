import { useState } from 'react';
import s from './List.module.css'
import { useCallback } from 'react';

function List({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
   

    const deleteTodo = useCallback ((id) => {
        const newList = [...todo].filter(item => item.id != id)
        setTodo(newList)
    }, [setTodo])

   const statusTodo = useCallback ((id) => {  //функция закрыть, открыть
      const newList = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
          return item
        })
        setTodo(newList)
    }, [setTodo])

   function editTodo (id, title) { //функция редактирования
        setEdit(id)
        setValue(title)
    }

    //console.count (1)
     
     function saveTodo (id) {  //функция добавить
        const newList = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
         
            return item
        })
        setTodo(newList)
        setEdit(null) //режим просмотра
    }

    return <>
        <div className={s.listbtn}>
            <fieldset className={s.fieldset}><legend className={s.legend}>List</legend>
                <div>
                    {
                        todo.map(item => (
                            <div key={item.id} className={s.list}>
                                {
                                    edit == item.id ?
                                        <div>
                                            <input value={value} onChange={(e) => setValue(e.target.value)} />
                                        </div> :
                                        <div className={!item.status ? s.close : ''} >{item.title}</div>
                                }

                                {
                                    edit == item.id ?
                                        <div>
                                            <button onClick={() => saveTodo(item.id)} className={s.btn}>Save</button>
                                        </div> :
                                        <div>
                                            <button onClick={() => deleteTodo(item.id)} className={s.delete}>Delete</button>
                                            <button onClick={() => editTodo(item.id, item.title)} className={s.btn}>Edit</button>
                                            <button onClick={() => statusTodo(item.id)} className={s.btn}>
                                                {
                                                    item.status ? <span>Open</span> : <span>Close</span>
                                                }
                                            </button>
                                        </div>
                                }

                            </div>
                        ))

                    }
                </div>

            </fieldset>
        </div>
    </>
   }


export default List;