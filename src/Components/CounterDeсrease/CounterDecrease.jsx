import React, {useState} from 'react';
const Counter = (props) => {
    const [count,setCount] = useState(0)
    const [inputValue,setInputValue] = useState('')
    function minus() {
        setCount(count - Number(inputValue));
        props.changeCount(props.allCount-Number(inputValue))
        setInputValue('')
    }
    return (
        <div>
            <button onClick={minus}>Убавить</button>
            <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}/>
        </div>
    );
};

export default Counter;