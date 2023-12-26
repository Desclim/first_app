import React, {useState} from 'react';
const initialForm = {
    category: '',
    sum: 0,
    description: '',
}
const Form = (props) => {

    const [form,setForm] = useState(initialForm)
    function addFormResult() {
        props.setResultForm ([...props.resultForm, form])
        props.changeCount(props.allCount-Number(form.sum))
        setForm({...initialForm})
    }
    return (
        <div>
            <div className="form">
                <input value={form.category} onChange={(e)=>{setForm({...form, category: e.target.value})}} placeholder="Категория"/>
                <input value={form.sum} type={"number"} max='0' onChange={(e)=>{setForm({...form, sum: Number(e.target.value)})}} placeholder="Сумма"/>
                <input value={form.description} onChange={(e)=>{setForm({...form, description: e.target.value})}} placeholder="Описание"/>
                <button onClick={addFormResult}>Применить</button>
            </div>
        </div>
    );
};

export default Form;