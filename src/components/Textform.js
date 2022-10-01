import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('button is clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('to uppar case','convert')
    }
    const handleLoClick = ()=>{
        console.log('button is clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleGmailClick = ()=>{
        console.log('button is clicked' + text)
        let newText = text.split(' ').slice(2, 4).join();
        setText(newText);
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleOnChange = (event)=>{
        console.log('on change')
        setText(event.target.value)
    }
    const [text , setText] = useState('')
    
  return (
    <>
    <div className="container">
    <div>
        <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} style= {{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode=== 'light'?'dark':'light'}}onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >convert up text</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >convert lo text</button>
        <button className="btn btn-primary mx-2" onClick={handleGmailClick} >gmail extractor</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >text copy</button>
    </div>
    </div>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
     <h3 >your text summary</h3>
     <p >{(text.split(" ").filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
     <p>{0.008 * text.split(' ').length} Minutes to read</p>
     <h4>preview</h4>
     <p>{text.length>0?text:'enter something in text box'}</p>
    </div>
    </>
  )
}
