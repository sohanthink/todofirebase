import React, { useState } from 'react'

const Calculator = () => {


    let [addValue, setAddValue] = useState('')
    let [subValue, setsubValue] = useState('')
    let [multiplyValue, setmultiplyValue] = useState('')
    let [devideValue, setdevideValue] = useState('')
    let [result, setResult] = useState(0)

    let [history, setHistory] = useState([])

    const handleOperation = (operator) => {
        const add = parseFloat(addValue);
        const sub = parseFloat(subValue);
        const multiply = parseFloat(multiplyValue);
        const devide = parseFloat(devideValue);
        let newResult;

        switch (operator) {
            case 'add':
                newResult = add + result;
                setHistory([...history, `${result} + ${add} = ${newResult}`]);
                setAddValue('')
                break;
            case 'sub':
                newResult = result - sub;
                setHistory([...history, `${result} - ${sub} = ${newResult}`]);
                setsubValue("")
                break;
            case 'devide':
                newResult = result / devide;
                setHistory([...history, `${result} / ${devide} = ${newResult}`]);
                setdevideValue('')
                break;
            case 'multiply':
                newResult = multiply * result;
                setHistory([...history, `${result} * ${multiply} = ${newResult}`]);
                setmultiplyValue('')
                break;

        }
        setResult(newResult);
    }




    return (
        <>
            <div className="calculator">
                <div className="main">
                    <div className="left">
                        <div className="add">
                            <input type='number' value={addValue} onChange={(e) => setAddValue(e.target.value)} />
                            <button onClick={() => handleOperation('add')}>Add</button>
                        </div>
                        <div className="sub">
                            <input type='number' value={subValue} onChange={(e) => setsubValue(e.target.value)} />
                            <button onClick={() => handleOperation('sub')}>Sub</button>
                        </div>
                        <div className="multiply">
                            <input type='number' value={multiplyValue} onChange={(e) => setmultiplyValue(e.target.value)} />
                            <button onClick={() => handleOperation('multiply')}>Multiply</button>
                        </div>
                        <div className="devide">
                            <input type='number' value={devideValue} onChange={(e) => setdevideValue(e.target.value)} />
                            <button onClick={() => handleOperation('devide')}>devide</button>
                        </div>
                        <div className="result">
                            <span>{result}</span>
                        </div>
                    </div>
                    <div className="right">
                        <h1>History Of Calculation</h1>
                        <ul>
                            {
                                history.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator