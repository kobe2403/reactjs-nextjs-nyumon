import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react"
import "./App.css"

/**
 * 独自ステート
 * use〇〇で勝手にフックだと判断してくれる
 * const [変数, 関数] = useState(初期値);
 * const 関数
 * return 値
 */
function useCounter() {
    const [num, setNum] = useState(0);//初期値は0、変数はnum、変更は関数setNumで行う。
    //独自フックの関数
    const count = () => {
        setNum(num + 1);//ステートの変数numに＋１する。これをsetNum関数でnumに上書き
    }

    return [num, count];//ステートの値を得るものnumと数字を1増やす関数countを返す。
}

function AlertMessage() {
    const [counter, plus] = useCounter();
    return (
        <div className="alert alert-primary h5 text-center">
            <h4>Count:{counter}</h4>
            {/**plusの型をanyで対応 */}
            <button onClick={plus as any} className="btn btn-primary">count</button>
        </div>
    )
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