import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase Was Clicked!" + text);
        // let newText = text.toLocaleUpperCase();
        setText(text.toLocaleUpperCase());
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase Was Clicked!" + text);
        // let newText = text.toLowerCase();
        setText(text.toLowerCase());
    }

    const handleReClick = ()=>{
        // console.log("Uppercase Was Clicked!" + text);
        // let newText = "";
        setText("");
    }

    const handleOnChange = (event)=>{
        // console.log("    On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowwer Case</button>
        <button className="btn btn-primary mx-1" onClick={handleReClick}><datagrid>Reset</datagrid></button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )    
}
