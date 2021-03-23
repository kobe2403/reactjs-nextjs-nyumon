import React, {useState} from "react"

function usePersist(ky:string, initVal:any) {
    const key = "hooks:" + ky;
    const value = () => {
        try {
            const item = window.localStorage.getItem(key);//ローカルストレージから取得。
            return item ? JSON.parse(item) : initVal//空の場合、初期値を返す。
        }catch (err) {
            console.log(err);
            return initVal;
        }
    };

    const setValue = (val:string) => {
        try {
            setSavedValue(val);
            window.localStorage.setItem(key, JSON.stringify(val));
        } catch (err){
            console.log(err);
        }
    };

    const [savedValue, setSavedValue] = useState(value);//ステートの設定。ローカルストレージの値をセット

    return (
        [savedValue, setValue]
    )
}

export default usePersist;