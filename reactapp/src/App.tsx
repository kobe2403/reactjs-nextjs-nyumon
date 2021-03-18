import { render } from "@testing-library/react";
import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"

let data = {
    title: "React-context",
    message: "this is sample message.",
};

const SampleContext = React.createContext(data);

class App extends Component<{}, {}> {
    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <Title />
                <Message />
            </div>
        </div>
    }
}

class Title extends Component<{}, {}> {
    static contextType = SampleContext;

    render() {
        return <div className="card my-3">
            <h2>{this.context.title}</h2>
        </div>
    }
}

class Message extends Component<{}, {}> {
    static contextType = SampleContext;

    render() {
        return <div className="alert alert-primary">
            <h2>{this.context.message}</h2>
        </div>
    }
}


export default App