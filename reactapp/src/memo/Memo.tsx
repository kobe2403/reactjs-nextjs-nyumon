//import React, {useState, useEffect} from "react"
import usePersist from "../Persist"
import Item from "./Item"

function  Memo() {
    const [memo, setMemo] = usePersist("memo", []);
    const [fmemo, setFMemo] = usePersist("findmemo", []);
    const [mode, setMode] = usePersist("mode", "default");

    let data = [];
    switch(mode) {
        case "default" :
            data = memo.map((value:any, key:any) => {
                <Item key={value.message} value={value} index={key + 1} />
            });
            setMode("default");
            break;
        case "find" :
            data = fmemo.map((value:any, key:any) => {
                <Item key={value.message} value={value} index={key + 1} />
            });
            break;
        default :
            data = memo.map((value:any, key:any) => {
                <Item key={value.message} value={value} index={key + 1} />
            });
            break;
    }

    return (
        <table className="table mt-4">
            <tbody>{data}</tbody>
        </table>
    );
}

export default Memo;