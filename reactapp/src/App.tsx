import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"

class App extends Component {
    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <p className="subtitle">This is sample component.</p>
                <Rect x="200" y="200" w="200" h="200" c="#6ff9" r="25" />
            </div>
        </div>
    }
}

export default App