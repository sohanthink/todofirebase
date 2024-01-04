import React from 'react'

const Calculator = () => {
    return (
        <>
            <div className="calculator">
                <div className="main">
                    <div className="left">
                        <div className="add">
                            <input /><button>Add</button>
                        </div>
                        <div className="sub">
                            <input /><button>Sub</button>
                        </div>
                        <div className="multiply">
                            <input /><button>Multiply</button>
                        </div>
                        <div className="devide">
                            <input /><button>devide</button>
                        </div>
                        <div className="result">
                            <span>10</span>
                        </div>
                    </div>
                    <div className="right">
                        <h1>History Of Calculation</h1>
                        <ul>
                            <li>something added</li>
                            <li>something added</li>
                            <li>something added</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator