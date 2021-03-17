import React, {Component} from "react"
import "./App.css"
import Rect from "./components/Rect"

interface Props {
    
}

interface State {
   
}


class App extends Component<Props, State> {
    data:any[] = [];

    area = {
        width: "500px",
        height: "500px",
        border: "1px solid blue",
    }

    constructor(props:any) {
        super(props);
        this.state = {
            list: this.data,
        }

        this.doAction = this.doAction.bind(this);
    }

    doAction(e: any) {
        let x = e.pageX;
        let y = e.pageY;
        this.data.push({x:x, y:y})
        this.setState({
            list: this.data
        })
    }

    draw(d:any){
        let s:object = {
            position: "absolute",
            left: (d.x - 25) + "px",
            top: (d.y - 25) + "px",
            width: "50px",
            height: "50px",
            backgroundColor: "#66f3",
        }
        return <div style={s}></div>
    }

    render() {
        return <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <p className="subtitle">Count number.</p>
                <div style={this.area} onClick={this.doAction}>
                    {this.data.map((value) => this.draw(value))}
                </div>
            </div>
        </div>
    }
}

export default App