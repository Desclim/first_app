import React, {useState} from 'react';
import styles from '../Counter/Counter.module.css'
const CounterAdd = (props) => {
    const [count,setCount] = useState(0)
    const [inputValue,setInputValue] = useState('')
    function plus() {
        setCount(count + Number(inputValue));
        props.changeCount(props.allCount+Number(inputValue))
        setInputValue('')
    }

    return (
        <div>
            <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}/>
            <button className={styles.btn} onClick={plus}>Добавить</button>
        </div>
    );
};

export default CounterAdd;