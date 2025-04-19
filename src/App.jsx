import { useEffect, useState } from "react"

function App(){
  const [all,setAll] = useState('')
  const [input,setInput] = useState('')
  function myinput(value){
    if(value=='AC'){
      setInput('')
      setAll('')
    }
    else if(value=='+'||value=='-'||value=='x'||value=='/'){
      setInput(value)
      setAll(prev=>prev+value)
      setInput('')
    }
    else if(value=='='){
      const result = eval(all.replace(/x/g,'*'))
      setAll(prev=>prev+'='+result.toString())
    }
    else{
      setInput(prev=>prev+value)
      setAll(prev=>prev+value)
    }
  }
  useEffect(()=>{
    document.title = 'Javascript Calculator'
  },[])
  return(
    <div className="containerr">
      <div className="calculator">
        <h5 style={{'color':'white'}} id="display">{all}</h5>
        <h1><input type="text" value={input}/></h1>
        <div className="roww"><button id="AC" className="btn btn-danger" onClick={()=>myinput('AC')}><h3>AC</h3></button><button className="btn btn-secondary" onClick={()=>myinput('/')} id="divide"><h3>/</h3></button><button className="btn btn-secondary" onClick={()=>myinput('x')} id='multiply'><h3>x</h3></button></div>
        <div className="roww"><button id="seven" className="btn btn-dark" onClick={()=>myinput('7')}><h3>7</h3></button><button id="eight" className="btn btn-dark" onClick={()=>myinput('8')}><h3>8</h3></button><button id="nine" className="btn btn-dark" onClick={()=>myinput('9')}><h3>9</h3></button><button className="btn btn-secondary" onClick={()=>myinput('-')} id="subtract"><h3>-</h3></button></div>
        <div className="roww"><button id="four" className="btn btn-dark" onClick={()=>myinput('4')}><h3>4</h3></button><button id="five" className="btn btn-dark" onClick={()=>myinput('5')}><h3>5</h3></button><button id="six" className="btn btn-dark" onClick={()=>myinput('6')}><h3>6</h3></button><button className="btn btn-secondary" onClick={()=>myinput('+')} id="add"><h3>+</h3></button></div>
        <div className="roww"><button id="one" className="btn btn-dark" onClick={()=>myinput('1')}><h3>1</h3></button><button id="two" className="btn btn-dark" onClick={()=>myinput('2')}><h3>2</h3></button><button id="three" className="btn btn-dark" onClick={()=>myinput('3')}><h3>3</h3></button></div>
        <div className="roww"><button id="zero" className="btn btn-dark" onClick={()=>myinput('0')}><h3>0</h3></button><button className="btn btn-dark" onClick={()=>myinput('.')} id="decimal"><h3>.</h3></button><button id="equals" className="btn btn-primary" onClick={()=>myinput('=')}><h3>=</h3></button></div>
      </div>
      <h5 className="text-center">Designed and Coded<br/>By Ahmed Hassan</h5>
    </div>
  )
}

export default App
