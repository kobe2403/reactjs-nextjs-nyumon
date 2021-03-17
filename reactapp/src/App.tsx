import { render } from "@testing-library/react";
import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"


class App extends Component<{}, {}> {
    data:string[] = [
       "This is list sample.",
       "これはリストのサンプルです。",
       "配列をリストに変換します。" 
    ];

    constructor(props:any) {
        super(props);
        this.state = {
            list: this.data,
        }
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <p className="subtitle">Show list.</p>
                <List title="サンプルリスト" data={this.data} />
            </div>
        </div>
    }
}

class List extends Component<{title: string,data: string[]}, {}> {
    number = 1;

    render() {
        let data = this.props.data;

        return (
            <div>
                <p className="h5 text-center">{this.props.title}</p>
                <ul className="list-group">
                    {data.map((item, key) => 
                        <li className="list-group-item" key={key}>
                            <Item number={key + 1} value={item} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


class Item extends Component<{number: number,value: string}, {}> {
    itm:Object = {
        fontSize: "16px",
        color: "#00f",
        textDecoration: "underline",
        textDecorationColor: "#ddf",
    }

    num:Object = {
        fontWeight: "bold",
        color: "red",
    }

    render() {
        return (
            <p style={this.itm}>
                <span style={this.num}>
                    [{this.props.number}]&nbsp;
                </span>
                {this.props.value}
            </p>
        )
    }

}

export default App