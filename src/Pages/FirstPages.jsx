import React from 'react';
import CounterAdd from "../Components/CounterAdd/CounterAdd";
import Form from "../Components/form/Form";

const FirstPages = ({allCount,setAllCount,resultForm,setResultForm}) => {
    return (
        <div>
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
                    <Form resultForm={resultForm} setResultForm={setResultForm} allCount={allCount} changeCount={setAllCount}/>
                </div>

            </div>
        </div>
    );
};

export default FirstPages;