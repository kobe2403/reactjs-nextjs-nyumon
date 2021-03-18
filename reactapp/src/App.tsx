import { render } from "@testing-library/react";
import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"


class App extends Component<any, {title:string, message:string, max: number}> {
    input:string = "";

    constructor(props:any) {
        super(props);
        this.state = {
            title: "input form",
            message: "type your name.",
            max: 10,
        }
        /* this.doChange = this.doChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this); */
        this.doCheck = this.doCheck.bind(this);
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

    //バリデーションチェック
    doCheck(e:any) {
        alert(e.target.value + "は長すぎます。（最大" + this.state.max + "文字）")
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
               <h4>{this.state.title}</h4>
               <Message maxlength={this.state.max} onCheck={this.doCheck} />
            </div>
        </div>
    }
}

class Message extends Component<{maxlength:number, onCheck:any}, {}> {
    li:object = {
        fontSize: "14pt",
        fontWeight: "bold",
        color: "#090",
    }

    constructor(props:any) {
        super(props);//親クラスののコンストラクタを指定
        this.doChange = this.doChange.bind(this);
    }

    doChange(e:any) {
        if (e.target.value.length > this.props.maxlength){
            this.props.onCheck(e);
            e.target.value = e.target.value.substr(0, this.props.maxlength)
        }
    }

    render() {
        return <div className="form-group">
            <label>input:</label>
            <input type="text" className="form-control" onChange={this.doChange} />
        </div>
    }

}

export default App