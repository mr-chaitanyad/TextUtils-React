import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter text");
    const handleUpClick = ()=>{
        const upp = text.toUpperCase();
        setText(upp);
        props.showAlert("Converted to uppercase","success");
    } 
    const handleLoClick = ()=>{
        const lo = text.toLowerCase();
        setText(lo);
        props.showAlert("Converted to lowercase","success");
    } 
   
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Clear textarea","success");
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);   
        props.showAlert("Text Copied","success");
    }
    const handleRemove = ()=>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extras space successfully","success");
    }
    return (
    <>
        <div style={{
                    color:  props.mode==='light'?'black':'white'
                }}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} id="myBox" style={{
                    backgroundColor: props.mode==='light'?'white':'#DCDCDC',
                }} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemove} >Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{
                    color:  props.mode==='light'?'black':'white'
                }}>
            <h2>Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}