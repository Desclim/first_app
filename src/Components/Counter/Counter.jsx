import React, {useState} from 'react';
import styles from './Counter.module.css';
const Counter = (props) => {
    const [count,setCount] = useState(0)
    const [inputValue,setInputValue] = useState('')
    function plus() {
        setCount(count + Number(inputValue));
        props.changeCount(props.allCount+Number(inputValue))
    }
    function minus() {
        setCount(count - Number(inputValue));
        props.changeCount(props.allCount-Number(inputValue))
    }
    return (
        <div>
            <h1>{count}</h1>
            <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}/>
            <button className={styles.btn} onClick={plus}>Добавить</button>
            <button onClick={minus}>Убавить</button>
        </div>
    );
};

export default Counter;