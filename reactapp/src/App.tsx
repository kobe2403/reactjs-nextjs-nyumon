import { render } from "@testing-library/react";
import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"


class App extends Component<any, {title:string, message:string}> {
    input:string = "";

    constructor(props:any) {
        super(props);
        this.state = {
            title: "input form",
            message: "type your name.",
        }
        this.doChange = this.doChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    //入力値の変更判定
    doChange(event:any) {
        this.input = event.target.value;
    }

    doSubmit(event:any){
        this.setState({
            title: "send form",
            message: "Hello," + this.input + "!!",
        })
        event.preventDefault();//フォーム送信の無効化
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
               <h4>{this.state.title}</h4>
               <p className="card h5 p-3">{this.state.message}</p>
               <div className="alert alert-primary mt-3">
                   <form onSubmit={this.doSubmit}>{/** onSubmitはhtmlに備わっているフォーム送信処理*/}
                       <div className="form-group">
                            <label>Message:</label>
                            {/** 
                             * onChangeはhtmlに備わっている入力値変更判定処理
                             * required patternでバリデーションチェック
                            */}
                            <input type="text" className="form-control" 
                                onChange={this.doChange} required pattern="[A-Za-z _,.]+" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Click"></input>
                   </form>
               </div>
            </div>
        </div>
    }
}

export default App