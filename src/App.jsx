  import { useEffect, useState } from "react";

  function App() {
    const [input, setInput] = useState('0');
    const [formula, setFormula] = useState('');
    const [evaluated, setEvaluated] = useState(false);

    function myInput(value) {
      if (value === 'AC') {
        setInput('0');
        setFormula('');
        setEvaluated(false);
      } else if (value === '=') {
        const expression = formula.replace(/x/g, '*');
        try {
          const result = eval(expression);
          setInput(result.toString());
          setFormula(result.toString());
          setEvaluated(true);
        } catch {
          setInput('Error');
          setFormula('');
        }
      } else if (['+', '-', 'x', '/'].includes(value)) {
        if (evaluated) {
          setFormula(input + value);
          setInput(value);
          setEvaluated(false);
        } else {
          let updatedFormula = formula;
          if (/[+\-x\/]$/.test(formula)) {
            updatedFormula = formula.slice(0, -1);
          }
          setFormula(updatedFormula + value);
          setInput(value);
        }
      } else if (value === '.') {
        if (evaluated) {
          setInput('0.');
          setFormula('0.');
          setEvaluated(false);
        } else if (!input.includes('.')) {
          setInput(input + '.');
          setFormula(formula + '.');
        }
      } else {
        if (evaluated) {
          setInput(value);
          setFormula(value);
          setEvaluated(false);
        } else {
          if (input === '0' && value === '0') return;
          else if (input === '0') {
            setInput(value);
            setFormula(formula.slice(0, -1) + value);
          } else {
            setInput(input + value);
            setFormula(formula + value);
          }
        }
      }
    }

    useEffect(() => {
      document.title = 'Javascript Calculator';
    }, []);

    return (
      <div className="containerr">
        <div className="calculator">
        <h6 className="formula-display">{formula}</h6>
        <h5 style={{ color: 'white' }} id="display">{input}</h5>

          <div className="roww">
            <button className="btn btn-danger" onClick={() => myInput('AC')} id="clear"><h3>AC</h3></button>
            <button className="btn btn-secondary" onClick={() => myInput('/')} id="divide"><h3>/</h3></button>
            <button className="btn btn-secondary" onClick={() => myInput('x')} id="multiply"><h3>x</h3></button>
            <button className="btn btn-secondary" onClick={() => myInput('-')} id="subtract"><h3>-</h3></button>
          </div>

          <div className="roww">
            <button className="btn btn-dark" onClick={() => myInput('7')} id="seven"><h3>7</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('8')} id="eight"><h3>8</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('9')} id="nine"><h3>9</h3></button>
            <button className="btn btn-secondary" onClick={() => myInput('+')} id="add"><h3>+</h3></button>
          </div>

          <div className="roww">
            <button className="btn btn-dark" onClick={() => myInput('4')} id="four"><h3>4</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('5')} id="five"><h3>5</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('6')} id="six"><h3>6</h3></button>
          </div>

          <div className="roww">
            <button className="btn btn-dark" onClick={() => myInput('1')} id="one"><h3>1</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('2')} id="two"><h3>2</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('3')} id="three"><h3>3</h3></button>
          </div>
          <div className="roww">
            <button className="btn btn-dark" onClick={() => myInput('0')} id="zero"><h3>0</h3></button>
            <button className="btn btn-dark" onClick={() => myInput('.')} id="decimal"><h3>.</h3></button>
            <button id="equals" className="btn btn-primary" onClick={() => myInput('=')}><h3>=</h3></button>
          </div>


        </div>
        <h5 className="text-center">Designed and Coded<br />By Ahmed Hassan</h5>
      </div>
    );
  }

  export default App;
