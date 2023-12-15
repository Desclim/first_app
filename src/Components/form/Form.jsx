import React, {useState} from 'react';
const initialForm = {
    category: '',
    sum: 0,
    description: '',
}
const Form = (props) => {

    const [form,setForm] = useState(initialForm)
    function addFormResult() {
        const test = [form]
        props.setResultForm ([...props.resultForm, ...test])
        setForm({...initialForm})
    }
    return (
        <div>
            <div className="form">
                <input value={form.category} onChange={(e)=>{setForm({...form, category: e.target.value})}} placeholder="Категория"/>
                <input value={form.sum} type={"number"} onChange={(e)=>{setForm({...form, sum: Number(e.target.value)})}} placeholder="Сумма"/>
                <input value={form.description} onChange={(e)=>{setForm({...form, description: e.target.value})}} placeholder="Описание"/>
                <button onClick={addFormResult}>Применить</button>
            </div>
        </div>
    );
};

export default Form;