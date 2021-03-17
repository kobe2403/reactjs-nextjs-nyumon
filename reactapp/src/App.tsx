import { render } from "@testing-library/react";
import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"


class App extends Component<any, {}> {
    input = "";

    constructor(props:any) {
        super(props)
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <Message title="Children!!" >
                    あああああああああああああああ。
                    あああああああああああああああ。
                    あああああああああああああああ。
                </Message>
            </div>
        </div>
    }
}

class Message extends Component<{title:string}, {value:string, key:string}> {
    li:object = {
        fontSize: "14pt",
        fontWeight: "bold",
        color: "#090",
    }

    render() {
        let content:any = this.props.children;
        let arr:any;
        if (content){
            arr = content.split("。");
        }
        let arr2:any = [];
        for (let i = 0; i < arr.length; i++){
            if (arr[i].trim() != ""){
                arr2.push(arr[i]);
            }
        }
        let list = arr2.map((value:string, key:string) =>(
            <li className="list-group-item" style={this.li}
                key={key}>
                    {key + 1} . {value}.
            </li>
        ));

        return <div>
            <h2>{this.props.title}</h2>
            <ol className="list-group">{list}</ol>
        </div>
    }
}


export default App