import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react"
import "./App.css"

//フック
const useTax = (t1:number, t2:number) => {
    const [price, setPrice]= useState(100);//ステート
    const [tx1] = useState(t1);//ステート。税率
    const [tx2] = useState(t2);//ステート。税率

    //型定義入れないとエラー発生
    const tax:any = () => {
        return Math.floor(price * (1.0 + tx1 / 100));
    };//関数
    //型定義入れないとエラー発生
    const reduced:any = () => {
        return Math.floor(price * (1.0 + tx2 / 100));
    };//関数
    return [price, tax, reduced, setPrice];//戻り値
};

function AlertMessage() {
    const [price, tax, reduced, setPrice] = useTax(10, 8);
    const DoChange = (e:any) => {
        let p = e.target.value;
        setPrice(p);
    };

    return (
        <div className="alert alert-primary h5">
            <p className="h5">通常税率：{tax()}円.</p>
            <p className="h5">軽減税率：{reduced()}円.</p>
            <div className="form-group">
                <label className="form-group-label">Price:</label>
                <input type="number" className="form-control" onChange={DoChange} value={price as any} />
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage />
            </div>
        </div>
    )
}

export default App