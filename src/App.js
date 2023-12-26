import './App.css';
import {useState} from "react";
import CounterAdd from "./Components/CounterAdd/CounterAdd";
import Form from "./Components/form/Form";
import TableMain from "./Components/tableMain/TableMain";
import NavMenu from "./Components/NavMenu/NavMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPages from "./Pages/FirstPages";
import SecondPages from "./Pages/SecondPages";

function App() {
    const [allCount,setAllCount] = useState(0)
    const [resultForm, setResultForm] = useState([])
    console.log(resultForm);
    return (
        <BrowserRouter>
            <div>
                <NavMenu/>
                    <div className='tableContainer'>
                    <Routes>
                        <Route path='/' element={<FirstPages allCount={allCount} setAllCount={setAllCount} resultForm={resultForm} setResultForm={setResultForm}/>}/>
                        <Route path='/tableMinus' element={<TableMain resultForm={resultForm} setResultForm={setResultForm}/>}/>
                        <Route path='/tablePlus' element={<SecondPages/>}/>
                    </Routes>
                    </div>
            </div>

        </BrowserRouter>

  );
}

export default App;

