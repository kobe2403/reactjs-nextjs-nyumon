import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react"
import "./App.css"

const total = (val:any) => {
    let re = 0;
    for (let i = 0; i < val; i++){
        re += i;
    }
    return re;
};

//消費税の計算
const tax = (val:any) => {
    return Math.floor(val * 1.1);
}

//数値を計算し、メッセージを返す独自フック
const useCalc = (num = 0, func = (val:any) => {return val}) => {
    const [msg, setMsg]:[string, any] = useState("");
    const P = num;
    const setValue = (p:any) => {
        let res = func(p);
        setMsg(<p className="h5">※{p}の結果は、{res}です。</p>);
    };

    return [msg, setValue];
};

//デフォルトコンポーネント
function PlainMessage() {
    const [msg, setCalc]:any[] = useCalc(0);
    const onChange = (e:any) => {
        setCalc(e.target.value);
    };

    return (
        <div className="p-3 h5">
            <h5>{msg}</h5>
            <input type="number" onChange={onChange} className="form-control" />
        </div>
    );

}

//合計計算コンポーネント
function AlertMessage() {
    const [msg, setCalc]:any[] = useCalc(0 ,total);
    const onChange = (e:any) => {
        let p = e.target.value;
        setCalc(p);
    };

    return (
        <div className="alert alert-primary h5">
            <p className="h5">{msg}</p>
            <input type="number" className="form-control" onChange={onChange} min="0" max="10000" />
        </div>
    );
}

//消費税計算コンポーネント
function CardMessage() {
    const [msg, setCalc]:any[] = useCalc(0, tax);
    const onChange = (e:any)=> {
        setCalc(e.target.value);
    }

    return (
        <div className="card p-3 h5 border-primary">
            <h5>{msg}</h5>
            <input type="range" onChange={onChange} min="0" max="10000" step="100" className="from-control" />
        </div>
    );
}

function App() {
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <PlainMessage />
                <AlertMessage />
                <CardMessage />
            </div>
        </div>
    )
}

export default App