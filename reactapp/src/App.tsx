import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"

interface IState {
    msg: any;
    counter: number;
    flg: boolean,
}


class App extends Component<{}, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            msg: "Count start!!.",
            counter: 0,
            flg: true,
        }

        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        this.setState({
            counter: this.state.counter + 1,
            msg: this.state.counter,
            flg: !this.state.flg,
        })        
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <p className="subtitle">Count number.</p>
                {this.state.flg ? 
                    <div className="alert alert-primary text-right">
                        <p className="h5">count: {this.state.counter}</p>
                    </div>
                :
                    <div className="alert alert-primary text-left">
                        <p className="h5">{this.state.msg}です</p>
                    </div>
                }
                <p className="alert alert-warning">{this.state.msg}</p>
                <button className="btn btn-primary" onClick={this.doAction}>Click</button>
            </div>
        </div>
    }
}

export default App