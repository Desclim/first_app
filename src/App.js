import './App.css';
import {useState} from "react";
import Counter from "./Components/Counter/Counter";
import CounterAdd from "./Components/CounterAdd/CounterAdd";
import CounterDecrease from "./Components/CounterDeсrease/CounterDecrease";
import Form from "./Components/form/Form";

function App() {
    const [allCount,setAllCount] = useState(0)
    const [resultForm, setResultForm] = useState([])
    console.log(resultForm);
    return (
    <div className="App">
        <div>
            <CounterAdd allCount={allCount} changeCount={setAllCount}/>
        </div>
        <div>
            <h1>
                {allCount}
            </h1>
        </div>
        <div>
            <Form resultForm={resultForm} setResultForm={setResultForm}/>
        </div>
    </div>
  );
}

export default App;

/*
выравнить счетчики чуть ниже страницы , а сверху общий счетчик
одно поле с одной кнопкой добавить, а у всех других только уменьшить и каждый из счетчиков покрасить в определенный цвет*/
