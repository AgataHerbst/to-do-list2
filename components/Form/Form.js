import { useState } from 'react';
import { useCallback } from 'react';
import s from './Form.module.css';

function Form({ todo, setTodo }) {
    const [value, setValue] = useState('')
    //console.log(value)
    const saveTodo = useCallback (() => {
        setTodo(
            [...todo, {
                id: Math.random(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }, [setValue])

    return <>
        <div className={s.form}>
            <fieldset className={s.fieldset}><legend>Form</legend>
                <div>
                    <input placeholder='Enter the task!' value={value} onChange={(e) => setValue(e.target.value)} className={s.input} />
                    <button onClick={saveTodo} className={s.btn}>Save</button>
                </div>
            </fieldset>
        </div>
    </>
}

export default Form;