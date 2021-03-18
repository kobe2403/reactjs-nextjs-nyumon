import { render } from "@testing-library/react";
import React, {useState} from "react"
import "./App.css"


function App() {
    const [count, setCount] = useState(0)
    const clickFunk = () => {
        setCount(count + 1)
    }

    const [flg, setFlag] = useState(false)
    const changeflag = (e:any) => {
        setFlag(e.target.checked)
    }

    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                {flg ? 
                <div className="alert alert-primary text-center">
                    <p className="h5 mb-3">click: {count} times!</p>
                    <div>
                    <button className="btn btn-primary" onClick={clickFunk}>Click here!</button>
                    </div>
                </div>
                :
                <div className="card p-3 border-primary text-center">
                    <p className="h5 mb-3 text-left text-primary">click: {count} times!</p>
                    <div>
                    <button className="btn btn-primary" onClick={clickFunk}>Click here!</button>
                    </div>
                </div>
                }
                <div className="form-group h6 text-center pt-3">
                    <input type="checkbox" className="form-check-input" id="check1" onChange={changeflag}></input>
                    <label className="form-check-label" htmlFor="check1">
                        Change form style.
                    </label>
                </div>
            </div>
        </div>
    )
}

export default App