import React, {useState, useEffect} from "react";
import usePersist from "../Persist";

function AddForm() {
    const [memo, setMemo] = usePersist("memo", []);
    const [message, setMessage] = useState("");

    const doChange = (e:any) => {
        setMessage(e.target.value);
    }

    const doAction = () => {
        const data:object = {
            message: message,
            created: new Date(),
        }
        memo.unshift(data);
        setMemo(memo);
        setMessage("");
    }

    return (
        <form onSubmit={() => doAction()} action="" >
            <div className="form-group row">
                <input type="text" className="form-control-sm col" onChange={(e) => doChange(e)} value={message} required />
                <input type="submit" className="btn btn-primary btn-sm col-2" value="Add" />
            </div>
        </form>
    );
}

export default AddForm;