import React, {useState, useEffect, memo} from "react";
import usePersist from "../Persist";

function FindForm() {
    const [memo, setMemo] = usePersist("memo", []);
    const [fmemo, setFMemo] = usePersist("findMemo", []);
    const [message, setMessage] = useState("");
    const [mode, setMode] = usePersist("mode", "find");

    const doChange = (e:any) => {
        setMessage(e.target.value);
    }

    const doAction = () => {
        if (message == ""){
            setMode("default");
            return
        }
        let res = memo.filter((item:any, {}) => {
            return item.message.includes(message);
        })
        setFMemo(res);
        setMode("find");
        setMessage("");
    }

    return (
        <form onSubmit={() => doAction()}>
            <div className="form-group row">
                <input type="text" onChange={(e) => doChange(e)} value={message} className="form-control-sm col" />
                <input type="submit" value="Find" className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
    );
}

export default FindForm;