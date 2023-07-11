import React, { useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text:'');
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    });

    const changeHandler=(e)=>{
        setInput(e.target.value)
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });
        setInput('');
    };
    return (
        <form onSubmit={handleSubmit}>
            {props.edit?(
                <>
                <div>
                    <input type='text' placeholder='Update a Task' value={input} name='text' className='form-control form-control-lg my-3' onChange={changeHandler} ref={inputRef}/>
                </div>
                <button className='btn btn-success align-right' style={{ float: 'right' }}>Update Todo</button>
                </>
            ):(
                <>
                    <div className='fw-bolder my-5'>CREATE TODO</div>
                    <div>
                        <input type='text' placeholder='Add a Task' value={input} name='text' className='form-control form-control-lg my-3' onChange={changeHandler} ref={inputRef}/>
                    </div>
                    <button className='btn btn-primary align-right' style={{ float: 'right' }}>CREATE</button>
                </>
            )}
        </form>
    );
}

export default TodoForm
